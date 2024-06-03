import React from "react";
import "./Home.css";
import home from "./home.jpg";

function Home({ text }) {
  return (
    <div className="home">
      {/*Home_left */}
      <div className="home_left"></div>
      <img src={home} />
      {/*Home_right*/}
      <div className="home_right"></div>
    </div>
  );
}

export default Home;
