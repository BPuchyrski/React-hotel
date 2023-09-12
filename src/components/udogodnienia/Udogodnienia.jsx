import css from "./Udogodnienia.module.css";
import wifi from "../../assets/wifi.svg";

const Udogodnienia = () => {
  return (
    <div className={css.overlay}>
      <div className={css.background}>
        <h4 className={css.title}>Udogodnienia</h4>
        <div className={css.body}>
          <ul className={css.list}>
            <li>Sprzęt plażowy</li>
            <li>Altanka</li>
            <li>Miejsce do grillowania</li>
            <li>Pralka</li>
            <li>TV</li>
          </ul>
          <ul className={css.list2}>
            <li>WI-FI</li>
            <li>Plac zabaw</li>
            <li>50m do najbliżeszego sklepu</li>
            <li>Plaża dla osób z pieskami 200m</li>
            <li>Bankomat</li>
          </ul>
        </div>
        <img className={css.wifi} src={wifi} alt="Udogodnienia" />
      </div>
    </div>
  );
};

export default Udogodnienia;
