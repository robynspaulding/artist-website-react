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
import { BiosIndex } from "./BiosIndex";
import { BiosShow } from "./BiosShow";
import { Contact } from "./Contact";
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

  const [bios, setBios] = useState([]);
  const [isBioShowVisable, setIsBioShowVisable] = useState(false);

  const [currentBio, setCurrentBio] = useState({});

  const handleIndexBios = () => {
    axios.get("http://localhost:3000/bios.json").then((response) => {
      console.log(response.data);
      setBios(response.data);
    });
  };

  const handleBioShow = (bio) => {
    setIsBioShowVisable(true);
    setCurrentBio(bio);
  };
  const handleHideBio = () => {
    setIsBioShowVisable(false);
  };

  const handleUpdateBio = (id, params) => {
    axios.patch("http://localhost:3000/bios/" + id + ".json", params).then((response) => {
      const updatedBio = response.data;
      setCurrentBio(updatedBio);

      setBios(
        bios.map((bio) => {
          if (bio.id === updatedBio.id) {
            return updatedBio;
          } else {
            return bio;
          }
        })
      );
    });
  };

  useEffect(handleIndexBios, []);

  return (
    <div>
      <BiosIndex bios={bios} onSelectBio={handleBioShow} />
      <Modal show={isBioShowVisable} onClose={handleHideBio}>
        <BiosShow bio={currentBio} onUpdateBio={handleUpdateBio} />
      </Modal>
      <GalleriesIndex galleries={galleries} onSelectGallery={handleGalleryShow} />
      <Modal show={isGalleryShowVisable} onClose={handleHideGallery}>
        <GalleriesShow
          gallery={currentGallery}
          onUpdateGallery={handleUpdateGallery}
          onDestroyGallery={handleDestroyGallery}
        />
      </Modal>
      <GalleriesNew />
      <ResumesIndex resumes={resumes} onSelectResume={handleResumeShow} />
      <Modal show={isResumeShowVisable} onClose={handleHideResume}>
        <ResumesShow resume={currentResume} onUpdateResume={handleUpdateResume} onDestroyResume={handleDestroyResume} />
      </Modal>
      <ResumesNew />
      <Contact />
    </div>
  );
}
