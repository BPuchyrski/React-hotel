import css from "./Banner.module.css";
import Aos from "aos";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className={css.mainImg}>
      <h1 className={css.bannerTitle}>BB-Altic</h1>
      <p className={css.bannerText}>Domki Apartamenty Pokoje w Pobierowie</p>
      <div className={css.lineShort}></div>
      <div className={css.line}></div>
      <div className={css.lineShortLast}></div>
      <p className={css.bannerText}>Wypoczynek i wygoda w atrakcyjnej cenie</p>
    </div>
  );
};

export default Banner;
