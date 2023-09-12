import css from "./GalleryPage.module.css";
import { useEffect } from "react";

import RoomInfo from "../../components/roomInfo/RoomInfo";

import apartament4os1 from "../../assets/apartament4Os/FB_IMG_1654753644150-min.jpg";
import apartament4os2 from "../../assets/apartament4Os/IMG_20220503_130956-min.jpg";
import apartament4os3 from "../../assets/apartament4Os/IMG_20230415_164359-min.jpg";
import apartament4os4 from "../../assets/apartament4Os/IMG_20230415_164353-min.jpg";
import apartament4os5 from "../../assets/apartament4Os/IMG_20230415_164453-min.jpg";
import apartament4os6 from "../../assets/apartament4Os/IMG_20230415_172455-min.jpg";
import apartament4os7 from "../../assets/apartament4Os/received_1014553596165650-min.jpeg";
import apartament4os8 from "../../assets/apartament4Os/received_1403714436757494-min.jpeg";
import apartament4os9 from "../../assets/apartament4Os/received_334090205236986-min.jpeg";
import apartament4os10 from "../../assets/apartament4Os/received_593678887928828-min.jpeg";
import apartament4os11 from "../../assets/apartament4Os/received_658301185423163-min.jpeg";
import morski1 from "../../assets/morski/IMG_20230415_160847-min.jpg";
import morski2 from "../../assets/morski/IMG_20230415_160903-min.jpg";
import morski3 from "../../assets/morski/IMG_20230415_160958-min.jpg";
import morski4 from "../../assets/morski/IMG_20230415_161045-min.jpg";
import morski5 from "../../assets/morski/IMG_20230415_161208-min.jpg";
import morski6 from "../../assets/morski/received_257320568700190-min.jpeg";
import morski9 from "../../assets/morski/received_3523302587683019-min.jpeg";
import morski10 from "../../assets/morski/received_679999149508888-min.jpeg";
import granatowy1 from "../../assets/granatowy/IMG-20230628-WA0005.jpg";
import granatowy2 from "../../assets/granatowy/received_2664648657194855.jpeg";
import granatowy3 from "../../assets/granatowy/received_3189140327869487.jpeg";
import granatowy4 from "../../assets/granatowy/received_3523302587683019.jpeg";
import zielony1 from "../../assets/zielony/IMG_20230415_161208-min.jpg";
import zielony2 from "../../assets/zielony/received_1391006654443116-min.jpeg";
import zielony3 from "../../assets/zielony/received_1788703867920111-min.jpeg";
import zielony4 from "../../assets/zielony/received_259750218468311-min.jpeg";
import zielony5 from "../../assets/zielony/received_660708191176972-min.jpeg";
import zielony6 from "../../assets/zielony/received_687727045124822-min.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
const rooms = [
  {
    name: "Studio Wschodnie 5/6-os",
    photo: `${apartament4os1}`,
    text: "Komfortowy, nowo oddany domek/apartament 5-6-7 osobowy z kominkiem i ogrzewaniem podłogowym. Taras z meblami i grillem, łazienka, pokój dzienny z narożnikiem (może służyć jako dodatkowe spanie ) stolikiem kawowym i TV, kuchnia w pełnym wyposażeniu, na górze sypialnia 2 osobowa i 3 osobowa, w każdy pokój wyposażony w szafę , lampkę nocną, obok sypialni WC . ",
    gallery: [
      `${apartament4os1}`,
      `${apartament4os2}`,
      `${apartament4os3}`,
      `${apartament4os4}`,
      `${apartament4os5}`,
      `${apartament4os6}`,
      `${apartament4os7}`,
      `${apartament4os8}`,
      `${apartament4os9}`,
      `${apartament4os10}`,
      `${apartament4os11}`,
    ],
  },
  {
    name: "Pokój 2-os morski",
    photo: `${morski1}`,
    text: "Nowy komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed wejściem taras z meblami, pokój dzienny z aneksem kuchennym w pełnym wyposażeniu i TV, przytulna sypialnia z 2 łóżkami jednoosobowymi i szafą, łazienka. Jeśli chcesz przyjechać z przyjaciółmi dysponujemy dwoma taki apartamentami obok siebie. Zapraszam :)",
    gallery: [
      `${morski1}`,
      `${morski2}`,
      `${morski3}`,
      `${morski4}`,
      `${morski5}`,
      `${morski6}`,
      `${morski9}`,
      `${morski10}`,
    ],
  },
  {
    name: "Pokój 3/4-os granatowy",
    photo: `${granatowy1}`,
    text: "Pokoje z łazienkami granatowy 3-4 osobowy i pokój pomarańczowy 2-3 osobowy, aneks kuchenny, taras",
    gallery: [
      `${granatowy1}`,
      `${granatowy2}`,
      `${granatowy3}`,
      `${granatowy4}`,
    ],
  },
  {
    name: "Pokój 3-os zielony",
    photo: `${zielony5}`,
    text: "Nowy komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed wejściem taras z meblami, pokój dzienny z aneksem kuchennym w pełnym wyposażeniu i TV, przytulna sypialnia z 2 łóżkami jednoosobowymi i szafą, łazienka. Jeśli chcesz przyjechać z przyjaciółmi dysponujemy dwoma taki apartamentami obok siebie. Zapraszam :)",
    gallery: [
      `${zielony1}`,
      `${zielony2}`,
      `${zielony3}`,
      `${zielony4}`,
      `${zielony6}`,
    ],
  },
  {
    name: "Pokój 2-os pomarańczowy",
    photo: `${granatowy1}`,
    text: "Pokoje z łazienkami granatowy 3-4 osobowy i pokój pomarańczowy 2-3 osobowy, aneks kuchenny, taras",
    gallery: [
      `${granatowy1}`,
      `${granatowy2}`,
      `${granatowy3}`,
      `${granatowy4}`,
    ],
  },
  {
    name: "Studio zachodnie 4-os",
    photo: `${apartament4os1}`,
    text: `Komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed
    wejściem taras z meblami, pokój dzienny z aneksem kuchennym w pełnym
    wyposażeniu i TV, przytulna sypialnia z 2 łóżkami jednoosobowymi i
    szafą, łazienka. Jeśli chcesz przyjechać z przyjaciółmi dysponujemy
    dwoma taki apartamentami obok siebie.`,
    gallery: [
      `${apartament4os1}`,
      `${apartament4os2}`,
      `${apartament4os3}`,
      `${apartament4os4}`,
      `${apartament4os5}`,
      `${apartament4os6}`,
      `${apartament4os7}`,
      `${apartament4os8}`,
      `${apartament4os9}`,
      `${apartament4os10}`,
      `${apartament4os11}`,
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
