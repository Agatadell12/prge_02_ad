import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import mundury_1 from "./mundury_1.jpg";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <button className="home_top_about">O PROJEKCIE</button>
      </div>
      <div className="home_button"></div>
      <div className="home_left">
        <div className="home_left_title">GEOPORTAL</div>
        <div className="home_left_subtitle">
          Geoportal tematyczny sytemu zarządzania „mundurówka”
        </div>

        <button className="home_right_button"> START </button>
      </div>
      {/*Home_right*/}
      <div className="home_right">
        <img className="mundury_1" src={mundury_1} alt="logo" />
      </div>
      <Link to="services">
        <button className="home_right_button">START</button>
      </Link>
    </div>
  );
}

export default Home;
