import Aos from "aos";
import { useEffect } from "react";
import css from "./GalleryInvitation.module.css";

const GalleryInvitation = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={css.overlay}>
      <ul className={css.gallery}>
        <li data-aos="flip-left" className={css.galleryItem}>
          <img
            className={css.image}
            src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
          ></img>
        </li>
        <li data-aos="flip-right" className={css.galleryItem}>
          <img
            className={css.imageToRight}
            src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
          ></img>
        </li>
        <li data-aos="flip-left" className={css.galleryItem}>
          <img
            className={css.image}
            src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          ></img>
        </li>
        <li data-aos="flip-right" className={css.galleryItem}>
          <img
            className={css.imageToRight}
            src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
          ></img>
        </li>
      </ul>
    </div>
  );
};

export default GalleryInvitation;
