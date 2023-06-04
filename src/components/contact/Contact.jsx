import { Map, Marker, ZoomControl } from "pigeon-maps";
import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={css.overlay}>
      <h2 className={css.contactTitle}>Znajdziesz nas 5 minut od plaży !</h2>
      <div className={css.contactInfo}>
        <Map height={300} defaultCenter={[54.06506, 14.95086]} defaultZoom={16}>
          <ZoomControl />
          <Marker width={50} anchor={[54.06506, 14.95086]} />
        </Map>
        <div className={css.contactInfoBg}>
          <h3 className={css.contactInfoTitle}>
            Zapraszam do kontaktu telefonicznego oraz mailowego
          </h3>
          <ul className={css.contactList}>
            <li className={css.contactItem}>BB-ALTIC</li>
            <li className={css.contactItem}>72-346 Pobierowo</li>
            <li className={css.contactItem}>ul. Grunwaldzka 118</li>
            <li className={css.contactItem}>608-800-751</li>
            <li className={css.contactItem}>kontakt@bb-altic.pl</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
