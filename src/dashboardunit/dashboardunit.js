import React from "react";
import MediaCard from "./Card";
import "./Dashboardunit.css";

function Dashboard() {
  const input_list = [
    {
      name: "Janek",
      surname: "Kowalski",
      content: "jakisopis Janka ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Ola",
      surname: "Jaciubek",
      content: "jakisopis Oli ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Mateusz",
      surname: "Świetlicki",
      content: "jakisopis Mateusza ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
    {
      name: "Agata",
      surname: "Drzygało",
      content: "jakisopis Agaty ",
      image:
        "https://geoforum.pl/upload3/news_pl/picture/328_geodeta_artykul6.jpg",
    },
  ];
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Baza oddziałów</h1>
      </div>
      <div className="dashboard-container">
        {input_list.map((item, index) => (
          <MediaCard
            key={index}
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
