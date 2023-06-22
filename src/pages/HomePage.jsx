import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Invitation from "../components/invitation/Invitation";
import GalleryInvitation from "../components/galleryInvitation/GalleryInvitation";

const HomePage = () => {
  return (
    <>
      <main>
        <Banner />
      </main>
      <section>
        <Invitation />
      </section>
      <section>
        <GalleryInvitation />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
