import React from "react";
import MediaCard from "./Cardsolider";
import { useNavigate } from "react-router-dom";
import "./Dashboardsolider.css";

function Dashboardsolider() {
  const navigate = useNavigate();
  const input_list = [
    {
      name: " szer. Janek",
      surname: "Nieznany",
      content:
        "Żołnierz pobierający sorty w Jednostce Wojskowej 1. Wszystko zostało wydane.",
      image:
        "https://thumbs.dreamstime.com/b/portrait-military-soldier-giving-salute-boot-camp-89669479.jpg",
    },
    {
      name: "sierż. Joanna",
      surname: "Smiałek",
      content:
        "Zołnierz pobierający sory w Jednostce Wojskowej nr 2. Nie wydano kasku, butów zimowych, bieizny zimowej",
      image:
        "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2203/7112393/1000w_q95.jpg",
    },
    {
      name: "kpt. Michał",
      surname: "Jakubczyj",
      content: "Wszystko zostało wydane",
      image:
        "https://www.armytimes.com/resizer/1_RuZbV7vndtKzAAlAvkVOHPHmg=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/OKUTW5AYJ5GR5PVLV7F2WBMQSE.jpg",
    },
    {
      name: "ppłk. Andrzej ",
      surname: "Piotrowski",
      content: "Wszytsko wydane ",
      image: "https://live.staticflickr.com/4353/36474086931_9f9b9fb4ba.jpg",
    },
    {
      name: "gen. bryg. Paweł",
      surname: "Grabowski",
      content: "Wszytsko wydane",
      image:
        "https://th.bing.com/th/id/OIP.tXtDo7UDB5ARR5JZqcL3OgHaE7?rs=1&pid=ImgDetMain",
    },
    {
      name: "gen. dyw. Robert",
      surname: "Zieliński",
      content: "Nie wydano kamizelki kuloodpornek",
      image:
        "https://i2.wp.com/static.politico.com/2c/29/5f2ee4e7460a8f08e0222e928cae/army-gen-john-nicholson.jpg",
    },
    {
      name: "ppłk. Weronika",
      surname: "Krawczyk",
      content:
        "Nie wydano butów wojskowych dwie pary praz pantofli kąpielowych",
      image:
        "https://th.bing.com/th/id/OIP.PDZSibEEGpdIffwllnXs8wHaK6?pid=ImgDet&w=197&h=290&c=7",
    },
    {
      name: "mjr. Małgorzata",
      surname: "Mazur",
      content: "Wszytsko wydane",
      image:
        "https://img.freepik.com/premium-photo/female-soldier-saluting-white-background_987903-49.jpg",
    },
    {
      name: "st. chor. sztab. Paweł",
      surname: "Piotr",
      content: "Wszystko wydane",
      image:
        "https://th.bing.com/th/id/OIP.Tk5ZCKG5WFxtaTx0Qwl5tgHaLJ?w=1063&h=1600&rs=1&pid=ImgDetMain",
    },
    {
      name: "por. Katarzyna",
      surname: "Wójcik",
      content: "Wszystko wydane",
      image:
        "https://img.freepik.com/premium-photo/african-american-female-soldier-saluting-white-background_987903-27.jpg",
    },
  ];
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>BAZA ŻOŁNIERZY</h1>
        <div className="dashboard-buttons">
          <button onClick={() => navigate("/services/mapsolider")}>MAPA</button>
          <button onClick={() => navigate("/services")}>DOSTĘPNE USŁUGI</button>
          <button onClick={() => navigate("/databasesolider")}>
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

export default Dashboardsolider;
