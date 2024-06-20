import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import mapIcon from "./map-icon.png";
import servicesIcon from "./services-icon.png";
import uniform from "./uniform.jpg";

function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_content">
        <div className="services_options">
          <Link to="map" className="services_obj">
            <img src={mapIcon} alt="mapa" className="service-icon-img" />
            <div className="service_text">Mapa jednostek</div>
          </Link>
          <Link to="mapworkers" className="services_obj">
            <img src={mapIcon} alt="Mapa" className="service-icon-img" />
            <div className="service_text">Mapa pracowników </div>
          </Link>
          <Link to="mapsolider" className="services_obj">
            <img src={mapIcon} alt="Mapa" className="service-icon-img" />
            <div className="service_text">Mapa żołnierzy</div>
          </Link>
          <Link to="/databasesolider" className="services_obj">
            <img
              src={servicesIcon}
              alt="Baza danych"
              className="service-icon-img"
            />
            <div className="service_text">Baza danych żołnierzy</div>
          </Link>
          <Link to="/databaseworkers" className="services_obj">
            <img
              src={servicesIcon}
              alt="Baza danych"
              className="service-icon-img"
            />
            <div className="service_text">Baza danych pracowników</div>
          </Link>
          <Link to="/database" className="services_obj">
            <img
              src={servicesIcon}
              alt="Baza danych"
              className="service-icon-img"
            />
            <div className="service_text">Baza danych jednostek wojskowych</div>
          </Link>
          <Link to="/">
            <div className="back">POWRÓT DO STRONY STARTOWEJ</div>
          </Link>
        </div>
        <div className="uniforms">
          <div className="uniform_square">
            <img src={uniform} alt="uniform" className="uniform-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
