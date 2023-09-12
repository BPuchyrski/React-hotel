import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Invitation from "../components/invitation/Invitation";
import GalleryInvitation from "../components/galleryInvitation/GalleryInvitation";
import MainPageGallery from "../components/mainPageGallery/MainPageGallery";
import Udogodnienia from "../components/udogodnienia/Udogodnienia";
import { useEffect } from "react";
import css from "./HomePage.module.css";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <Banner />
      </header>
      <main className={css.container}>
        <section>
          <Invitation />
        </section>
        <section>
          <MainPageGallery />
        </section>
        <section>
          <Udogodnienia />
        </section>
        <section>
          <GalleryInvitation />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
};

export default HomePage;
