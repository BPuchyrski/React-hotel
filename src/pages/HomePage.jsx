import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Invitation from "../components/invitation/Invitation";
import GalleryInvitation from "../components/galleryInvitation/GalleryInvitation";
import MainPageGallery from "../components/mainPageGallery/MainPageGallery";

const HomePage = () => {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <section>
          <Invitation />
        </section>
        <section>
          <MainPageGallery />
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
