import css from "./Regulamin.module.css";
const RegulaminPage = () => {
  return (
    <div className={css.container}>
      <h1>Regulamin</h1>
      <ul className={css.list}>
        <li>Doba hotelowa 15:00 - 10:00</li>
        <li>Zakaz palenia w pokojach</li>
        <li>Parking płatny na miejscu 50zł za tydzień</li>
        <li>Opłata klimatyczna pobierana na miejscu według stawek gminy </li>
        <li>Możliwość korzystania z pralki za dodatkową opłatą </li>
        <li>Opłata za zwierzę 15zł na dzień</li>
        <li>Za poniesione szkody w pokojach ponosi osoba wynajmująca</li>
        <li>
          Korzystanie z placu zabaw na terenie ośrodka tylko pod opieką i
          odpowiedzialnością rodzica po wcześniejszym zapoznaniu się z
          regulaminem placu zabaw
        </li>
      </ul>
    </div>
  );
};

export default RegulaminPage;
