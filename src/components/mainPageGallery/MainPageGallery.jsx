import css from "./MainPageGallery.module.css";
import outside from "../../assets/outside.jpeg";
import placZabaw from "../../assets/placZabaw.jpg";
import taras1 from "../../assets/taras1.jpg";
import mainPage from "../../assets/mainpage.jpg";
import mainPage2 from "../../assets/mainpage2.jpg";
import mainPage3 from "../../assets/mainpage3.jpg";
import { Link } from "react-router-dom";
const MainPageGallery = () => {
  return (
    <div className={css.overlay}>
      <h2 className={css.galleryTitle}>
        Domki i pokoje w różnej konfiguracji !
      </h2>
      <Link to="/gallery" className={css.galleryLink}>
        {"--->"} Zobacz wszystkie nasze pokoje tutaj ! {"<---"}
      </Link>

      <div className={css.gallery}>
        <ul className={css.galleryList}>
          <li className={css.galleryItem}>
            <img className={`${css.photo}`} src={`${mainPage}`} alt="1" />
          </li>
          <li className={css.galleryItem}>
            <img className={`${css.photo}`} src={`${mainPage2}`} alt="1" />
          </li>
          <li className={css.galleryItem}>
            <img className={`${css.photo}`} src={`${outside}`} alt="1" />
          </li>
          <li className={css.galleryItem}>
            <img className={`${css.photo}`} src={`${taras1}`} alt="1" />
          </li>
          <li className={css.galleryItem}>
            <img className={`${css.photo}`} src={`${placZabaw}`} alt="1" />
          </li>
          <li className={css.galleryItem}>
            <img className={`${css.photo}`} src={`${mainPage3}`} alt="1" />
          </li>
        </ul>
      </div>
      <Link to="/gallery" className={css.galleryLink}>
        {"--->"} Zobacz wszystkie nasze pokoje tutaj ! {"<---"}
      </Link>
    </div>
  );
};

export default MainPageGallery;
