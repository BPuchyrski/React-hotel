import { Map, Marker, ZoomControl } from "pigeon-maps";
import css from "./ContactPage.module.css";

const ContactPage = () => {
  const userAgent = window.navigator.userAgent;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return (
    <div>
      <div className={css.contactContainer}>
        <h1 className={css.title}>Kontakt</h1>
        <ul className={css.list}>
          <li className={css.item}>BB-ALTIC</li>
          <li className={css.item}>72-346 Pobierowo</li>
          <li className={css.item}>ul.Grunwaldzka 118</li>
          <li className={css.item}>608-800-751</li>
          <li className={css.item}>kontakt@bb-altic.pl</li>
        </ul>
      </div>
      <Map
        height={600}
        defaultCenter={[54.06506, 14.95086]}
        defaultZoom={16}
        touchEvents={isMobile ? false : true}
        mouseEvents={isMobile ? false : true}
      >
        <ZoomControl />
        <Marker width={50} anchor={[54.06506, 14.95086]} />
      </Map>
    </div>
  );
};

export default ContactPage;
