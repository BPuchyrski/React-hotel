import { useState } from "react";
import FsLightbox from "fslightbox-react";
import placZabaw from "../assets/placZabaw.jpg";
const Gallery = () => {
  const [toggler, setToggler] = useState(false);
  const [sources, setSources] = useState([]);

  const granatowy = [
    `${placZabaw}`,
    "https://images.unsplash.com/photo-1688354222650-4df4c3f32222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];

  const zielony = [
    "https://images.unsplash.com/photo-1688966838599-05e6cf6628cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    "https://images.unsplash.com/photo-1688354222650-4df4c3f32222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];

  const setgallery = (room) => {
    setSources(room);
    setToggler(!toggler);
  };

  return (
    <>
      <h1>Gallery</h1>
      <FsLightbox toggler={toggler} sources={sources} />

      <button onClick={() => setgallery(granatowy)}>btn</button>
      <button onClick={() => setgallery(zielony)}>btn 2</button>
    </>
  );
};

export default Gallery;
