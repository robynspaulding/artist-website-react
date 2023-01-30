import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { GalleriesIndex } from "./GalleriesIndex";
import { GalleriesNew } from "./GalleriesNew";
import { GalleriesShow } from "./GalleriesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { ResumesIndex } from "./ResumesIndex";
import { ResumesShow } from "./ResumesShow";
import { ResumesNew } from "./ResumesNew";
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

  const [resumes, setResumes] = useState([]);
  const [isResumeShowVisable, setIsResumeShowVisable] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleIndexResumes = () => {
    axios.get("http://localhost:3000/resumes.json").then((response) => {
      console.log(response.data);
      setResumes(response.data);
    });
  };

  const handleResumeShow = (resume) => {
    setIsResumeShowVisable(true);
    setCurrentResume(resume);
  };
  const handleHideResume = () => {
    setIsResumeShowVisable(false);
  };

  const handleUpdateResume = (id, params) => {
    axios.patch("http://localhost:3000/resumes/" + id + ".json", params).then((response) => {
      const updatedResume = response.data;
      setCurrentResume(updatedResume);

      setResumes(
        resumes.map((resume) => {
          if (resume.id === updatedResume.id) {
            return updatedResume;
          } else {
            return resume;
          }
        })
      );
    });
  };

  const handleDestroyResume = (resume) => {
    axios.delete("http://localhost:3000/resumes/" + resume.id, +".json").then((response) => {
      setResumes(resumes.filter((r) => r.id !== resume.id));
      handleHideResume();
    });
  };

  useEffect(handleIndexResumes, []);

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

      <ResumesIndex resumes={resumes} onSelectResume={handleResumeShow} />
      <Modal show={isResumeShowVisable} onClose={handleHideResume}>
        <ResumesShow resume={currentResume} onUpdateResume={handleUpdateResume} onDestroyResume={handleDestroyResume} />
      </Modal>
      <ResumesNew />
    </div>
  );
}
