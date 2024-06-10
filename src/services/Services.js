import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import mapIcon from "./map-icon.png";
import servicesIcon from "./services-icon.png";
import uniform1 from "./uniform1.jpg";
import uniform2 from "./uniform2.jpg";
import uniform3 from "./uniform3.png";
import uniform4 from ".//uniform4.jpg";

function Services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_content">
        <div className="services_options">
          <Link to="Map" className="services_obj">
            <img src={mapIcon} alt="Mapa" className="service-icon-img" />
            <div className="service_text">Mapa pracowników</div>
          </Link>
          <Link to="map" className="services_obj">
            <img src={mapIcon} alt="Mapa" className="service-icon-img" />
            <div className="service_text">Mapa jednostek</div>
          </Link>
          <Link to="map" className="services_obj">
            <img src={mapIcon} alt="Mapa" className="service-icon-img" />
            <div className="service_text">Mapa żołnierzy</div>
          </Link>
          <Link to="services" className="services_obj">
            <img
              src={servicesIcon}
              alt="Baza danych"
              className="service-icon-img"
            />
            <div className="service_text">Baza danych żołnierzy</div>
          </Link>
          <Link to="services" className="services_obj">
            <img
              src={servicesIcon}
              alt="Baza danych"
              className="service-icon-img"
            />
            <div className="service_text">Baza danych pracowników </div>
          </Link>
          <Link to="services" className="services_obj">
            <img
              src={servicesIcon}
              alt="Baza danych"
              className="service-icon-img"
            />
            <div className="service_text">Baza danych jednostek</div>
          </Link>
          <Link to="map" className="services_obj">
            <img src={mapIcon} alt="Mapa" className="service-icon-img" />
            <div className="service_text">Mapa</div>
          </Link>
        </div>
        <div className="uniforms">
          <div className="uniform_square">
            <img src={uniform1} alt="Uniform 1" className="uniform-img" />
          </div>
          <div className="uniform_square">
            <img src={uniform2} alt="Uniform 2" className="uniform-img" />
          </div>
          <div className="uniform_square">
            <img src={uniform3} alt="Uniform 3" className="uniform-img" />
          </div>
          <div className="uniform_square">
            <img src={uniform4} alt="Uniform 4" className="uniform-img" />
          </div>
          <div className="uniform_square">
            <img src={uniform1} alt="Uniform 1" className="uniform-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
