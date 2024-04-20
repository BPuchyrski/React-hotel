import css from "./Cennik.module.css";
const RegulaminPage = () => {
  return (
    <div className={css.container}>
      <h1>Cennik</h1>
      <ul className={css.list}>
        <li>
          Sezon Niski: <br></br>
          Maj / Czerwiec / Wrzesień
        </li>
        <li>
          Sezon Wysoki: <br></br>
          Lipiec / Sierpień / Majówka
        </li>
        <li>
          DOMEK 5-7 osobowy cena dotyczy 5 osób:
          <ul>
            <li>
              <b>Maj</b> *350 zł/doba
            </li>
            <li>
              <b>Czerwiec</b> 450/500 zł/doba
            </li>
            <li>
              <b>Lipec-Sierpien</b> 550zł/doba
            </li>
          </ul>
          Kolejna osoba w domku cena ustalana indywidualnie
        </li>
        <li>
          APARTAMENT 4 osobowy:
          <ul>
            <li>
              <b>Maj</b> * 250 zł/doba
            </li>
            <li>
              <b>Czerwiec</b> 280/300 zł/doba
            </li>
            <li>
              <b>Lipec-Sierpien</b> 340/360 zł/doba
            </li>
          </ul>
        </li>
        <li>
          STUDIO 5 osobowe (2 pokoje z aneksem i tarasem):
          <ul>
            <li>
              <b>Maj</b>* 340 zł/doba
            </li>
            <li>
              <b>Czerwiec</b> 370/390 zł/doba
            </li>
            <li>
              <b>Lipec-Sierpien</b> 410/440 zł/doba
            </li>
          </ul>
        </li>
        <li>
          POKÓJ 2 osobowy:
          <ul>
            <li>
              <b>Maj</b>* 140 zł/doba
            </li>
            <li>
              <b>Czerwiec</b> 150/160 zł/doba
            </li>
            <li>
              <b>Lipec-Sierpien</b> 170/180 zł/doba
            </li>
          </ul>
        </li>
        <li>
          POKOJ 3 osobowy:
          <ul>
            <li>
              <b>Maj</b>* 180 zł/doba
            </li>
            <li>
              <b>Czerwiec</b> 210/230 zł/doba
            </li>
            <li>
              <b>Lipec-Sierpien</b> 240/250 zł/doba
            </li>
          </ul>
        </li>
        <p className={css.text}>
          *Ceny za Maj podane w cenniku nie dotyczą majówki. W celu uzgodnienia
          ceny proszę o kontakt telefoniczny
        </p>
        <p className={css.text}>
          Dodatkowe opłaty takie jak parking czy pobyt pieska można znaleźć w
          regulaminie
        </p>
        <p className={css.text}>
          Do powyższych opłat należy doliczyc obowiązująca opłatę klimatyczną.
        </p>
        <p className={css.text}>
          <b>
            Ceny ustalane są indywidualnie zależą od terminu, ilości osób,
            rodzaju noclegu oraz długości pobytu.
          </b>
        </p>
        <p className={css.text}>
          <b>Istnieje możliwość negocjacji Zadzwoń!</b>
        </p>
      </ul>
    </div>
  );
};

export default RegulaminPage;
