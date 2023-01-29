import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { GalleriesIndex } from "./GalleriesIndex";
import { GalleriesNew } from "./GalleriesNew";
import { GalleriesShow } from "./GalleriesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
export function Home() {
  const [galleries, setGalleries] = useState([]);
  const [isGalleryShowVisable, setIsGalleryShowVisable] = useState(false);
  const [currentGallery, setCurrentGallery] = useState({});

  const handleIndexGalleries = () => {
    axios.get("http://localhost:3000/galleries.json").then((response) => {
      console.log(response.data);
      setGalleries(response.data);
    });
  };

  const handleGalleryShow = (gallery) => {
    setIsGalleryShowVisable(true);
    setCurrentGallery(gallery);
  };
  const handleHideGallery = () => {
    setIsGalleryShowVisable(false);
  };

  const handleUpdateGallery = (id, params) => {
    axios.patch("http://localhost:3000/galleries/" + id + ".json", params).then((response) => {
      const updatedGallery = response.data;
      setCurrentGallery(updatedGallery);

      setGalleries(
        galleries.map((gallery) => {
          if (gallery.id === updatedGallery.id) {
            return updatedGallery;
          } else {
            return gallery;
          }
        })
      );
    });
  };

  const handleDestroyGallery = (gallery) => {
    axios.delete("http://localhost:3000/galleries/" + gallery.id, +".json").then((response) => {
      setGalleries(galleries.filter((g) => g.id !== gallery.id));
      handleHideGallery();
    });
  };

  useEffect(handleIndexGalleries, []);

  return (
    <div>
      {/* <Signup /> */}
      <Login />
      <GalleriesNew />
      <GalleriesIndex galleries={galleries} onSelectGallery={handleGalleryShow} />
      <Modal show={isGalleryShowVisable} onClose={handleHideGallery}>
        <GalleriesShow
          gallery={currentGallery}
          onUpdateGallery={handleUpdateGallery}
          onDestroyGallery={handleDestroyGallery}
        />
      </Modal>
    </div>
  );
}
