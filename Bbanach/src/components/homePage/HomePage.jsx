import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main>
      <div className={css.mainImg}>
        <h1 className={css.bannerTitle}>B-Balic</h1>
        <p className={css.bannerText}>Domki i noclegi w Pobierowie</p>
        <div className={css.lineShort}></div>
        <div className={css.line}></div>
        <div className={css.lineShort}></div>
        <p className={css.bannerText}>
          Wypoczynek i wygoda w atrakcyjnej cenie
        </p>
      </div>
    </main>
  );
};

export default HomePage;
