import axios from "axios";
import { useState, useEffect } from "react";
import { GalleriesIndex } from "./GalleriesIndex";
import { GalleriesNew } from "./GalleriesNew";
import { GalleriesShow } from "./GalleriesShow";
import { Modal } from "./Modal";
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

  useEffect(handleIndexGalleries, []);

  return (
    <div>
      <GalleriesNew />
      <GalleriesIndex galleries={galleries} onSelectGallery={handleGalleryShow} />
      <Modal show={isGalleryShowVisable} onClose={handleHideGallery}>
        <GalleriesShow gallery={currentGallery} />
      </Modal>
    </div>
  );
}
