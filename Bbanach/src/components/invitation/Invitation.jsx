import css from "./Invitation.module.css";
import shell from "../../assets/shell.svg";
import checklist from "../../assets/checklist.svg";
import map from "../../assets/map.svg";
import calendar from "../../assets/calendar.svg";

const Invitation = () => {
  return (
    <div className={css.layout}>
      <h2 className={css.invitationTitle}>
        Zapraszamy do naszego ośrodka przez cały okres letni
      </h2>
      <ul className={css.list}>
        <li className={css.item}>
          <img className={css.icon} src={shell} alt="shell" />
          <h3>Nadmorski klimat, piękna plaża, wspaniały wypoczynek</h3>
          <p>
            Oferujemy wypoczynek w Pobierowie, malowniczej miejscowości
            położonej w lesie, wzdłuż wybrzeża. BB ALTIC usytuowany w pasie
            nadmorskim 100 m od czystej, szerokiej plaży,w cichym spokojnym
            miejscu wśród sosnowego lasu. Ośrodek wypoczynkowy BB ALTIC jest do
            Twojej dyspozycji już od czerwca, aż do września.
          </p>
        </li>
        <li className={css.itemPurple}>
          <img className={css.icon} src={checklist} alt="checklist" />
          <h3>JASNE WARUNKI POBYTU</h3>
          <p>
            Żadnych ukrytych kosztów. Parking, prąd, to wszystko jest wliczone w
            cenę pobytu. Nic Cię na miejscu nie zaskoczy.
          </p>
        </li>
        <li className={css.item}>
          <img className={css.icon} src={map} alt="map" />
          <h3>WSZĘDZIE BLISKO</h3>
          <p>
            120m do plaży, 50m do sklepu, 800m do centrum, 800m do dworca. Na
            pyszną rybę też dojdziesz piechotą. Czego chcieć więcej?
          </p>
        </li>
        <li className={css.itemPurple}>
          <img className={css.icon} src={calendar} alt="calendar" />
          <h3>ELASTYCZNE TERMINY</h3>
          <p>
            Czy planujesz tygdniowy urlop, czy tylko weekendowy wypad u nas
            znajdziesz nocleg. Zadzwoń i zapytaj o wolne terminy.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Invitation;
