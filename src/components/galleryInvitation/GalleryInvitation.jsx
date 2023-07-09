import Aos from "aos";
import { useEffect } from "react";
import css from "./GalleryInvitation.module.css";
import beach1 from "../../assets/beach1.jpg";
import beach2 from "../../assets/beach2.jpg";
import beach3 from "../../assets/beach3.jpg";
import beachSvg from "../../assets/beachSvg.svg";
import beachSvg2 from "../../assets/beachSvg2.svg";
import beachSvg3 from "../../assets/beachSvg3.svg";
import beachSvg4 from "../../assets/beachSvg4.svg";
import beachSvg5 from "../../assets/beachSvg5.svg";

const GalleryInvitation = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={css.overlay}>
      <div>
        <ul className={css.icons}>
          <li>
            <img className={css.icon} src={beachSvg4}></img>
          </li>
          <li>
            <img className={css.icon} src={beachSvg2}></img>
          </li>
          <li>
            <img className={css.icon} src={beachSvg3}></img>
          </li>
          <li>
            <img className={css.icon} src={beachSvg}></img>
          </li>
          <li>
            <img className={css.icon} src={beachSvg5}></img>
          </li>
        </ul>
      </div>
      <h2 className={css.beachTitle}>Znajdziesz nas 5 minut od plaży !</h2>
      <ul className={css.gallery}>
        <li data-aos="flip-left" className={css.galleryItem}>
          <img className={css.image} src={`${beach1}`}></img>
        </li>
        <li data-aos="flip-right" className={css.galleryItem}>
          <img className={css.imageToRight} src={`${beach2}`}></img>
        </li>
        <li data-aos="flip-left" className={css.galleryItem}>
          <img className={css.image} src={`${beach3}`}></img>
        </li>
      </ul>
    </div>
  );
};

export default GalleryInvitation;
