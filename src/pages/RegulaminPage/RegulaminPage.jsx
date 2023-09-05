import css from "./Regulamin.module.css";
const RegulaminPage = () => {
  return (
    <div className={css.container}>
      <h1>Regulamin</h1>
      <ul className={css.list}>
        <li>Opłata tygodniowa za parking wynosi 30 zł</li>
        <li>Punkt 2</li>
        <li>Punkt 3</li>
        <li>Punkt 4</li>
      </ul>
    </div>
  );
};

export default RegulaminPage;
