import axios from "axios";
import { useState, useEffect } from "react";
import { GalleriesIndex } from "./GalleriesIndex";


export function Home() {
  const [galleries, setGalleries] = useState([]);

  const handleIndexGalleries = () => {
    axios.get("http://localhost:3000/galleries.json").then((response) => {
      console.log(response.data);
      setGalleries(response.data);
    });
  };


  useEffect(handleIndexGalleries, []);
  return (
    <div>
      <GalleriesIndex galleries={galleries} />
    </div>
  );
}