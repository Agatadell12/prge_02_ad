import React from "react";
import MediaCard from "./Card";
import { useNavigate } from "react-router-dom";
import "./Dashboardunit.css";

function Dashboard() {
  const navigate = useNavigate();
  const input_list = [
    {
      name: "Jednostka wojskowa nr 1",
      content: "Jednostka wojskowa mieszcząca się w Warszawie",
      image:
        "https://th.bing.com/th/id/OIP.vG2XLs0w2u2mKDXFcWnlRwHaEK?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jednostka wojskowa nr 2",
      content: "Jednostka wojskowa mieszcząca się w Krakowie",
      image:
        "https://w0.peakpx.com/wallpaper/875/303/HD-wallpaper-aerial-view-of-city-buildings-during-daytime.jpg",
    },
    {
      name: "Jednostka Wojskowa nr 3",
      content: "Jednostka wojskowa mieszcząca się w Hrubieszowie",
      image:
        "https://w0.peakpx.com/wallpaper/875/303/HD-wallpaper-aerial-view-of-city-buildings-during-daytime.jpg",
    },
    {
      name: "Jednostka Wojskowa nr 4",
      content: "Jednostka wojskowa mieszcząca się w Zamościu",
      image:
        "https://th.bing.com/th/id/R.1e0e610bbb192d8f685db9b07fbed84a?rik=ENtcUkYhGu8r0A&pid=ImgRaw&r=0",
    },
    {
      name: "Wojskowy Oddział Gospodarczy 2",
      content: "Jednostka wojskowa mieszcząca się w Gdyni",
      image:
        "https://c4.wallpaperflare.com/wallpaper/478/580/13/cityscape-chicago-city-dusk-wallpaper-preview.jpg",
    },
    {
      name: "Oddział Czysty Mundur w Ślesinie",
      content: "Jednostka wojskowa mieszcząca się w Gdańsku",
      image: "https://live.staticflickr.com/2617/4120620437_8a22d113e6_b.jpg",
    },
    {
      name: "Jednostka Wojskowa 6",
      content: "Jednostka wojskowa mieszcząca się w Wrocławiu",
      image:
        "https://th.bing.com/th/id/OIP.vksDiuYN3b28XF_IuzvorQHaE8?w=900&h=600&rs=1&pid=ImgDetMain",
    },
    {
      name: "Jednostka Wojskowa 7",
      content: "Jednostka wojskowa mieszcząca się w Zakopanym",
      image:
        "https://th.bing.com/th/id/R.b4005e698608e36896e03f7d66ee9ec3?rik=syV03CX6WFpwTw&pid=ImgRaw&r=0",
    },
    {
      name: "Jednostka Wojskowa 8",
      content: "Jednostka wojskowa mieszcząca się w Warszawie",
      image:
        "https://th.bing.com/th/id/OIP.eTRAGgRaAqVhtaNP9hWFLQHaE8?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jednostka Wojskowa 9",
      content: "Jednostka wojskowa mieszcząca się w Warszawie",
      image:
        "https://th.bing.com/th/id/R.0d4e8c7b4326b3d6e9f3d45ea1db6b52?rik=iW1Q5be049%2fLPg&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>BAZA ODDZIAŁÓW </h1>
        <div className="dashboard-buttons">
          <button onClick={() => navigate("/services/map")}>MAPA</button>
          <button onClick={() => navigate("/services")}>DOSTĘPNE USŁUGI</button>
          <button onClick={() => navigate("/database")}>BAZA DANYCH </button>
        </div>
      </div>
      <div className="dashboard-container">
        {input_list.map((item, index) => (
          <div className="card" key={index}>
            <MediaCard
              name={item.name}
              content={item.content}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
