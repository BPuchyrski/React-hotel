import css from "./GalleryPage.module.css";
import { useEffect } from "react";

import RoomInfo from "../../components/roomInfo/RoomInfo";

// import granatowy1 from "../../assets/granatowy/IMG-20230628-WA0005.jpg";
// import granatowy2 from "../../assets/granatowy/received_2664648657194855.jpeg";
// import granatowy3 from "../../assets/granatowy/received_3189140327869487.jpeg";
// import granatowy4 from "../../assets/granatowy/received_3523302587683019.jpeg";
import granatowy10 from "../../assets/granatowy/gran1.jpeg";
import granatowy11 from "../../assets/granatowy/gran2.jpeg";
import granatowy12 from "../../assets/granatowy/gran3.jpeg";
import granatowy13 from "../../assets/granatowy/gran4.jpeg";
import granatowy14 from "../../assets/granatowy/gran5.jpeg";
import zielony1 from "../../assets/zielony/IMG_20230415_161208-min.jpg";
// import zielony2 from "../../assets/zielony/received_1391006654443116-min.jpeg";
// import zielony3 from "../../assets/zielony/received_1788703867920111-min.jpeg";
// import zielony4 from "../../assets/zielony/received_259750218468311-min.jpeg";
// import zielony5 from "../../assets/zielony/received_660708191176972-min.jpeg";
// import zielony6 from "../../assets/zielony/received_687727045124822-min.jpeg";
import zielony10 from "../../assets/zielony/ziel1.jpg";
import zielony11 from "../../assets/zielony/ziel2.jpeg";
import zielony12 from "../../assets/zielony/ziel3.jpeg";
import zielony13 from "../../assets/zielony/ziel4.jpeg";
import polnocny from "../../assets/polnocny/pol.jpg";
import polnocny1 from "../../assets/polnocny/pol1.jpg";
import polnocny2 from "../../assets/polnocny/pol2.jpg";
import polnocny3 from "../../assets/polnocny/pol3.jpg";
import polnocny4 from "../../assets/polnocny/pol4.jpg";
import polnocny5 from "../../assets/polnocny/pol5.jpeg";
import polnocny6 from "../../assets/polnocny/pol6.jpeg";
import polnocny7 from "../../assets/polnocny/pol7.jpeg";
import polnocny10 from "../../assets/polnocny/pol10.jpeg";
import polnocny11 from "../../assets/polnocny/pol11.jpg";
import polnocny12 from "../../assets/polnocny/pol12.jpg";
import polnocny13 from "../../assets/polnocny/pol13.jpg";
import polnocny14 from "../../assets/polnocny/pol14.jpg";
import polnocny15 from "../../assets/polnocny/pol15.jpg";
import poludniowy from "../../assets/poludniowy/polu.jpg";
import poludniowy1 from "../../assets/poludniowy/polu1.jpg";
import poludniowy2 from "../../assets/poludniowy/polu2.jpg";
import poludniowy3 from "../../assets/poludniowy/polu3.jpg";
import poludniowy4 from "../../assets/poludniowy/polu4.jpg";
import poludniowy5 from "../../assets/poludniowy/polu5.jpg";
import poludniowy6 from "../../assets/poludniowy/polu6.jpg";
import poludniowy7 from "../../assets/poludniowy/polu7.jpg";
import poludniowy8 from "../../assets/poludniowy/polu8.jpeg";
import poludniowy9 from "../../assets/poludniowy/polu9.jpeg";
import poludniowy10 from "../../assets/poludniowy/polu10.jpeg";
import poludniowy11 from "../../assets/poludniowy/polu11.jpeg";
import poludniowy12 from "../../assets/poludniowy/polu12.jpeg";
import poludniowy13 from "../../assets/poludniowy/polu13.jpeg";
import poludniowy14 from "../../assets/poludniowy/polu14.jpeg";
import poludniowy15 from "../../assets/poludniowy/polu15.jpeg";
import poludniowy16 from "../../assets/poludniowy/polu16.jpeg";
import zachodni from "../../assets/zachodni/zach.jpeg";
import zachodni1 from "../../assets/zachodni/zach1.jpg";
import zachodni2 from "../../assets/zachodni/zach2.jpeg";
import zachodni3 from "../../assets/zachodni/zach3.jpg";
import zachodni4 from "../../assets/zachodni/zach4.jpeg";
import zachodni5 from "../../assets/zachodni/zach5.jpeg";
import zachodni6 from "../../assets/zachodni/zach6.jpeg";
import wschodni from "../../assets/wschodni/ws.jpg";
import wschodni1 from "../../assets/wschodni/ws1.jpg";
import wschodni2 from "../../assets/wschodni/ws2.jpg";
import wschodni3 from "../../assets/wschodni/ws3.jpg";
import wschodni4 from "../../assets/wschodni/ws4.jpeg";
import wschodni5 from "../../assets/wschodni/ws5.jpeg";
import wschodni6 from "../../assets/wschodni/ws6.jpeg";
import wschodni7 from "../../assets/wschodni/ws7.jpeg";
import wschodni8 from "../../assets/wschodni/ws8.jpeg";
import wschodni9 from "../../assets/wschodni/ws9.jpeg";
import morski from "../../assets/morski/mor.jpg";
import morski1 from "../../assets/morski/mor1.jpg";
import morski2 from "../../assets/morski/mor2.jpg";
import morski3 from "../../assets/morski/mor3.jpg";
import morski4 from "../../assets/morski/mor4.jpg";
import morski5 from "../../assets/morski/mor5.jpg";
import morski6 from "../../assets/morski/mor6.jpeg";
import morski8 from "../../assets/morski/mor8.jpg";
import morski9 from "../../assets/morski/mor9.jpg";
import morski10 from "../../assets/morski/mor10.jpg";
import morski11 from "../../assets/morski/mor11.jpg";
import morski12 from "../../assets/morski/mor12.jpeg";
import morski13 from "../../assets/morski/mor13.jpeg";
import morski14 from "../../assets/morski/mor14.jpeg";
import orange from "../../assets/pomaranczowy/pom1.jpg";
import orange1 from "../../assets/pomaranczowy/pom2.jpg";
import orange2 from "../../assets/pomaranczowy/pom3.jpeg";
import orange3 from "../../assets/pomaranczowy/pom4.jpeg";
import orange4 from "../../assets/pomaranczowy/pom5.jpeg";
import orange5 from "../../assets/pomaranczowy/pom6.jpeg";
import orange6 from "../../assets/pomaranczowy/pom7.jpeg";
import orange7 from "../../assets/pomaranczowy/pom8.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
const rooms = [
  {
    name: "APARTAMENT/DOMEK PÓŁNOCNY",
    photo: `${polnocny3}`,
    text: `Komfortowy, domek/apartament 5-6-7 osobowy z kominkiem i
    ogrzewaniem podłogowym. Przed wejsciem zadaszony taras z meblami i grillem, łazienka, pokój  
    dzienny z narożnikiem (może służyć jako dodatkowe spanie ) stolikiem
    kawowym i TV, aneks kuchenny w pełnym wyposażeniu, ekspres do kawy, kuchenka mikrofalowa płyta indukcyjna, naczynia.
    Na górze sypialnia 2 i 3 osobowa, każdy pokój wyposażony w szafę , lampkę nocną, stolik nocny obok sypialni WC . `,
    gallery: [
      `${polnocny}`,
      `${polnocny1}`,
      `${polnocny2}`,
      `${polnocny3}`,
      `${polnocny4}`,
      `${polnocny5}`,
      `${polnocny6}`,
      `${polnocny7}`,
      `${polnocny11}`,
      `${polnocny12}`,
      `${polnocny13}`,
      `${polnocny14}`,
      `${polnocny15}`,
      `${polnocny10}`,
    ],
  },
  {
    name: "APARTAMENT/ DOMEK POŁUDNIOWY",
    photo: `${poludniowy4}`,
    text: `Komfortowy, domek/apartament 5-6-7 osobowy z ogrzewaniem podłogowym. Przed wejsciem zadaszony taras z meblami i grillem, łazienka, pokój
    dzienny z narożnikiem (może służyć jako dodatkowe spanie ) stolikiem kawowym i TV, aneks kuchenny w pełnym wyposażeniu, ekspres do kawy, kuchenka mikrofalowa płyta indukcyjna, naczynia. Na górze sypialnia 2 i 3 osobowa, każdy pokój wyposażony w szafę , lampkę nocną, stolik nocny obok sypialni WC .`,
    gallery: [
      `${poludniowy}`,
      `${poludniowy1}`,
      `${poludniowy2}`,
      `${poludniowy3}`,
      `${poludniowy4}`,
      `${poludniowy5}`,
      `${poludniowy6}`,
      `${poludniowy7}`,
      `${poludniowy8}`,
      `${poludniowy9}`,
      `${poludniowy10}`,
      `${poludniowy11}`,
      `${poludniowy12}`,
      `${poludniowy13}`,
      `${poludniowy14}`,
      `${poludniowy15}`,
      `${poludniowy16}`,
    ],
  },
  {
    name: "APARTAMENT 4 OSOBOWY ZACHODNI",
    photo: `${zachodni1}`,
    text: `Komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed
    wejściem taras z meblami, pokój dzienny w którym znajduje sie łóżko 2 osobowe. Pokój połączony z aneksem  kuchennym w pełnym
    wyposażeniu TV, przytulna sypialnia z 2 łóżkami jednoosobowymi, szafą, łazienka.
    Jeśli chcesz przyjechać z przyjaciółmi dysponujemy
    dwoma taki apartamentami obok siebie. Zapraszam :)`,
    gallery: [
      `${zachodni1}`,
      `${zachodni2}`,
      `${zachodni3}`,
      `${zachodni4}`,
      `${zachodni5}`,
      `${zachodni6}`,
      `${zachodni}`,
    ],
  },
  {
    name: "APARTAMENT 4 OSOBOWY WSCHODNI",
    photo: `${wschodni9}`,
    text: `Komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed wejściem taras z meblami, pokój dzienny w którym znajduje sie łóżko 2 osobowe. Pokój połączony z aneksem  kuchennym w pełnym wyposażeniu TV, przytulna sypialnia z 2 łóżkami jednoosobowymi, szafą, łazienka. Jeśli chcesz przyjechać z przyjaciółmi dysponujemy
    dwoma taki apartamentami obok siebie. Zapraszam :)`,
    gallery: [
      `${wschodni}`,
      `${wschodni1}`,
      `${wschodni2}`,
      `${wschodni3}`,
      `${wschodni4}`,
      `${wschodni5}`,
      `${wschodni6}`,
      `${wschodni7}`,
      `${wschodni8}`,
      `${wschodni9}`,
    ],
  },

  {
    name: "STUDIO 5 OSOBOWE ZACHODNIE",
    photo: `${morski12}`,
    text: `Samodzielne studio 5 osobowe z osobnym wejściem  składające sie z dwóch pokoi 2 i 3 osobowego. Kady pokoj ma swoja łazienka tv oraz czajnik i lodówke. Na korytarzu znajduje sie aneks kuchenny z mikrofalą płyta indukcyjną i zlewozmywakiem  wyposażony w naczynia talerze garnki sztucce. Przed wejściem do studia zadaszony  taras z meblami .`,
    gallery: [
      `${zielony1}`,
      `${morski}`,
      `${morski1}`,
      `${morski2}`,
      `${morski3}`,
      `${morski4}`,
      `${morski5}`,
      `${morski6}`,
      `${morski8}`,
      `${morski9}`,
      `${morski10}`,
      `${morski11}`,
      `${morski12}`,
      `${morski13}`,
      `${morski14}`,
    ],
  },
  {
    name: "STUDIO 5 OSOBOWE WSCHODNIE",
    photo: `${granatowy13}`,
    text: `Samodzielne studio 5 osobowe z osobnym wejściem  składające sie z dwóch pokoi 2 i 3-4 osobowego. Każdy pokoj ma swoja łazienka tv oraz czajnik i lodówke. Na korytarzu znajduje sie aneks kuchenny z mikrofalą płyta indukcyjną i zlewozmywakiem  wyposażony w naczynia talerze garnki sztucce. Przed wejściem do studia zadaszony  taras z meblami `,
    gallery: [
      `${granatowy10}`,
      `${granatowy11}`,
      `${granatowy12}`,
      `${granatowy13}`,
      `${granatowy14}`,
      `${zielony10}`,
      `${orange}`,
      `${orange1}`,
      `${orange2}`,
      `${orange3}`,
      `${orange4}`,
      `${orange5}`,
      `${orange6}`,
      `${orange7}`,
    ],
  },
  {
    name: "POKÓJ ZIELONY 3 OSOBOWY",
    photo: `${zielony12}`,
    text: `Pokój  z łazienką łóżkiem 2 osobowym,   TV. W pokoju czajnik, lodówka kącik kuchenny, szafa stól z krzesłami obok pokoju aneks kuchenny w pełnym wyposażeniu.  Przed wejściem taras z meblami  Możliwość skorzystania z altanki i grila Do dyspozycji gości miejsca parkingowe, miejsca do grilowania, plac zabaw dla dzieci, rowery sprzęt plażowy.`,
    gallery: [`${zielony10}`, `${zielony11}`, `${zielony12}`, `${zielony13}`],
  },
  {
    name: "POKÓJ GRANATOWY 3-4 OSOBOWY",
    photo: `${granatowy10}`,
    text: `Pokoj granatowy 3-4 osobowy z dwoma łózkami 2 osobowymi  z łazienka TV w pokoju czajnik i lodówka. Obok pokoju aneks kuchenny.`,
    gallery: [
      `${granatowy10}`,
      `${granatowy11}`,
      `${granatowy12}`,
      `${granatowy13}`,
      `${granatowy14}`,
      `${zielony10}`,
    ],
  },
  {
    name: "POKÓJ MORSKI 2 OSOBOWY",
    photo: `${morski}`,
    text: `Pokój  z łazienką łóżkiem 2 osobowym,   TV. W pokoju czajnik, lodówka kącik kuchenny, szafa stól z krzesłami obok pokoju aneks kuchenny w pełnym wyposażeniu.  Przed wejściem taras z meblami  Możliwość skorzystania z altanki i grila Do dyspozycji gości miejsca parkingowe, miejsca do grilowania, plac zabaw dla dzieci, rowery sprzęt plażowy.`,
    gallery: [
      `${morski}`,
      `${morski1}`,
      `${morski2}`,
      `${morski3}`,
      `${morski4}`,
      `${morski5}`,
      `${morski6}`,
      `${morski8}`,
      `${morski9}`,
      `${morski10}`,
      `${morski11}`,
      `${morski12}`,
      `${morski13}`,
      `${morski14}`,
    ],
  },
  {
    name: "POKÓJ POMARAŃCZOWY 2 OSOBOWY",
    photo: `${orange2}`,
    text: `Pokój  z łazienką łóżkiem 2 osobowym,   TV. W pokoju czajnik, lodówka kącik kuchenny, szafa stól z krzesłami obok pokoju aneks kuchenny w pełnym wyposażeniu.  Przed wejściem taras z meblami  Możliwość skorzystania z altanki i grila Do dyspozycji gości miejsca parkingowe, miejsca do grilowania, plac zabaw dla dzieci, rowery sprzęt plażowy.`,
    gallery: [
      `${orange}`,
      `${orange1}`,
      `${orange2}`,
      `${orange3}`,
      `${orange4}`,
      `${orange5}`,
      `${orange6}`,
      `${orange7}`,
    ],
  },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" className={css.container}>
      <h1 className={css.title}>Nasze Pokoje i Apartamenty</h1>
      <div className={css.room}>
        {rooms.map((room, index) => (
          <RoomInfo
            key={index}
            roomName={room.name}
            roomPhoto={room.photo}
            roomText={room.text}
            roomGallery={room.gallery}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
