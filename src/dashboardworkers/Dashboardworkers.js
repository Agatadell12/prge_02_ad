import React from "react";
import MediaCard from "./Cardworkers";
import { useNavigate } from "react-router-dom";
import "./Dashboardworkers.css";

function Dashboardworkers() {
  const navigate = useNavigate();
  const input_list = [
    {
      name: "Jan",
      surname: "Groźny",
      content:
        "Dowódca Wojskowego Oddziału gospodarczego nr 2. Rezyduje w kancelarii 101",
      image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-rock-dwayne-johnson-i-i-movie-poster-prints.jpg",
    },
    {
      name: "Adrianna",
      surname: "Cicha",
      content: "Zastępca dowódcy wojskowego odziału gospodarczego nr 2",
      image:
        "https://th.bing.com/th/id/OIP.6p1rBW1kDChtXCg1vMkkwgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      name: "Mateusz",
      surname: "Kropielnicki",
      content:
        "Szef sztabu w oddziale w ślesinie jednostki wojskowej czysty mundur",
      image:
        "https://watermark.lovepik.com/photo/20211124/large/lovepik-a-confident-business-man-picture_500894196.jpg",
    },
    {
      name: "Marek",
      surname: "Nowak",
      content: "Specjalista ds. Logistyki w Jednostce wojskowej nr 1",
      image: "https://fwcdn.pl/nph/867323/2021/33761_1.11.jpg",
    },
    {
      name: "Piotr",
      surname: "Kowalczyk",
      content: " Oficer Operacyjny w Jednostce wojskowej nr 3 ",
      image:
        "https://th.bing.com/th/id/OIP.2jzx_K4wqQtmXd_GNB0XcgHaEL?pid=ImgDet&w=474&h=267&rs=1",
    },
    {
      name: "Katarzyna",
      surname: "Wójcik",
      content:
        "Specjalistka do spraw mundurowych. Zna przepisy mundurowe od A do Z",
      image:
        "https://images.pexels.com/photos/3756520/pexels-photo-3756520.jpeg",
    },
    {
      name: "Tomasz",
      surname: "Kaczmarek",
      content: " Magazynier na magazynie wymiennym. NAjlepsza wymiana towaru",
      image:
        "https://th.bing.com/th/id/OIP.39ksjpJ17GemSDECByJmCgHaFw?rs=1&pid=ImgDetMain",
    },
    {
      name: "Monika",
      surname: "Mazur",
      content: "Szef ochrony magazynów zlokalizowanych na terenie jednostki",
      image:
        "https://media.licdn.com/dms/image/D4E03AQHemeQJji6Hrw/profile-displayphoto-shrink_800_800/0/1691069769025?e=2147483647&v=beta&t=whkOygk4tXO1ptr7Ox195CX2gvY1eHQlGeCNIg7FTP8",
    },
    {
      name: "Jacek",
      surname: "Krawczyk",
      content: "Szef strefy wyjściowej. Mudnury wyjściowe to jego specjalność",
      image:
        "https://tostpost.com/images/2018-Mar/16/07f7b99d12b7b043cf680aed05b98c15/2.jpg",
    },
    {
      name: "Magdalena",
      surname: "Pawlak",
      content: "Specjalista do spraw księgowania",
      image:
        "https://th.bing.com/th/id/OIP.gLFreY3WvT7OmbnVqzPmvQHaEc?&rs=1&pid=ImgDetMain",
    },
  ];
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>BAZA PRACOWNIKÓW </h1>
        <div className="dashboard-buttons">
          <button onClick={() => navigate("/services/mapworkers")}>MAPA</button>
          <button onClick={() => navigate("/services")}>DOSTĘPNE USŁUGI</button>
          <button onClick={() => navigate("/databaseworkers")}>
            BAZA DANYCH{" "}
          </button>
        </div>
      </div>
      <div className="dashboard-container">
        {input_list.map((item, index) => (
          <div className="card" key={index}>
            <MediaCard
              name={item.name}
              surname={item.surname}
              content={item.content}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboardworkers;
