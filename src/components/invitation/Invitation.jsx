import { useEffect } from "react";
import css from "./Invitation.module.css";
import shell from "../../assets/shell.svg";
import checklist from "../../assets/checklist.svg";
import map from "../../assets/map.svg";
import calendar from "../../assets/calendar.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Invitation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in-up" className={css.layout}>
      <h2 className={css.invitationTitle}>
        Zapraszamy od maja do października
      </h2>
      <ul className={css.list}>
        <li className={css.item}>
          <img className={css.icon} src={shell} alt="shell" />
          <h3>WYPOCZYNEK TUŻ PRZY PLAŻY</h3>
          <p className={css.itemText}>
            Nadmorski klimat, piękna plaża wspaniała atmosfera i ośrodek
            położony 150 m od morza w sosnowym lesie
          </p>
        </li>
        <li className={css.itemPurple}>
          <img className={css.icon} src={checklist} alt="checklist" />
          <h3>JASNE WARUNKI POBYTU</h3>
          <p className={css.itemText}>
            Zadnych ukrytych kosztów media wliczone w cene pobytu . Parking
            płatny 30 zł za tydzień Opłata klimatyczna pobierana wg stawek
            gminy. Nic Cie na miejscu nie zaskoczy
          </p>
        </li>
        <li className={css.item}>
          <img className={css.icon} src={map} alt="map" />
          <h3>WSZĘDZIE BLISKO</h3>
          <p className={css.itemText}>
            150m od plaży, 100m do najbliższej jadłodajni, do dworca 1000m a
            najbliższy sklep zaraz obok. Wszystko co potrzebne jest w zasięgu
            ręki !
          </p>
        </li>
        <li className={css.itemPurple}>
          <img className={css.icon} src={calendar} alt="calendar" />
          <h3>ELASTYCZNE TERMINY</h3>
          <p className={css.itemText}>
            Czy planujesz tygdniowy urlop, czy tylko weekendowy wypad u nas
            znajdziesz nocleg. Zadzwoń i zapytaj o wolne terminy.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Invitation;
