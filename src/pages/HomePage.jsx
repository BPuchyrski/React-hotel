import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Invitation from "../components/invitation/Invitation";

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
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
