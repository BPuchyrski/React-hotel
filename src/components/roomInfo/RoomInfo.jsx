/* eslint-disable react/prop-types */
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import css from "./RoomInfo.module.css";
const RoomInfo = ({ roomPhoto, roomText, roomName, roomGallery }) => {
  const [toggler, setToggler] = useState(false);
  const [sources, setSources] = useState([]);

  const setgallery = (room) => {
    setSources(room);
    setToggler(!toggler);
  };
  return (
    <div className={css.container}>
      <div onClick={() => setgallery(roomGallery)} className={css.overlay}>
        Więcej Zdjęć !
      </div>
      <FsLightbox toggler={toggler} sources={sources} />
      <img className={css.photo} src={roomPhoto} alt="room" />
      <h2 className={css.title}>{roomName}</h2>
      <p className={css.text}>{roomText}</p>
    </div>
  );
};

export default RoomInfo;
