import css from "./GalleryPage.module.css";

import RoomInfo from "../../components/roomInfo/RoomInfo";
import zielony1 from "../../assets/zielony1.jpeg";

const rooms = [
  {
    name: "Zielony",
    photo: `${zielony1}`,
    text: "Komfortowy, nowo oddany domek/apartament 5-6-7 osobowy z kominkiem i ogrzewaniem podłogowym. Taras z meblami i grillem, łazienka, pokój dzienny z narożnikiem (może służyć jako dodatkowe spanie ) stolikiem kawowym i TV, kuchnia w pełnym wyposażeniu, na górze sypialnia 2 osobowa i 3 osobowa, w każdy pokój wyposażony w szafę , lampkę nocną, obok sypialni WC . ",
    gallery: [
      "https://images.unsplash.com/photo-1688966838599-05e6cf6628cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      "https://images.unsplash.com/photo-1688354222650-4df4c3f32222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
  },
  {
    name: "Zielony",
    photo: `${zielony1}`,
    text: "Nowy komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed wejściem taras z meblami, pokój dzienny z aneksem kuchennym w pełnym wyposażeniu i TV, przytulna sypialnia z 2 łóżkami jednoosobowymi i szafą, łazienka. Jeśli chcesz przyjechać z przyjaciółmi dysponujemy dwoma taki apartamentami obok siebie. Zapraszam :)",
    gallery: [
      "https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1688354222650-4df4c3f32222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
  },
  {
    name: "Zielony",
    photo: `${zielony1}`,
    text: "Pokoje z łazienkami granatowy 3-4 osobowy i pokój pomarańczowy 2-3 osobowy, aneks kuchenny, taras",
    gallery: [
      "https://images.unsplash.com/photo-1688966838599-05e6cf6628cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      "https://images.unsplash.com/photo-1688354222650-4df4c3f32222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
  },
  {
    name: "Zielony",
    photo: `${zielony1}`,
    text: "Nowy komfortowy apartament 3-4 osobowy z ogrzewaniem podłogowym, przed wejściem taras z meblami, pokój dzienny z aneksem kuchennym w pełnym wyposażeniu i TV, przytulna sypialnia z 2 łóżkami jednoosobowymi i szafą, łazienka. Jeśli chcesz przyjechać z przyjaciółmi dysponujemy dwoma taki apartamentami obok siebie. Zapraszam :)",
    gallery: [
      "https://images.unsplash.com/photo-1688890239467-c43da335fe7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1688354222650-4df4c3f32222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
  },
];

const Gallery = () => {
  return (
    <div className={css.container}>
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
