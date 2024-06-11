import React from "react";
import "./about.css";
import authorPhoto from "./author.jpg"; // Zastąp ścieżką do zdjęcia autora

function About() {
  return (
    <div className="about-container">
      <div className="section">
        <h1>O PROJEKCIE</h1>
        <p>
          Shadow pink ghosts kill screen yellow disk video game maze console
          power up dots Midway. Poison ivy grew through the fence they said was
          impenetrable. Patricia loves the sound of nails strongly pressed
          against the chalkboard.
          <br />
          <br />
          She learned that water bottles are no longer just to hold liquid, but
          they're also status symbols. She was disgusted he couldn't tell the
          difference between lemonade and limeade. She had the gift of being
          able to paint songs. He found his art never progressed when he
          literally used his sweat and tears.
          <br />
          <br />
          Don't put peanut butter on the dog's nose. Poison ivy grew through the
          fence they said was impenetrable. Pac-Man Namco Toru Iwatani Pac-Man
          Fever maze dots. Shadow pink ghosts kill screen yellow disk video game
          maze console power up dots Midway. He was willing to find the depths
          of the rabbit hole in order to be with her.
          <br />
          <br />
          I think I will buy the red car, or I will lease the blue one. Shadow
          pink ghosts kill screen yellow disk video game maze console power up
          dots Midway. She had the gift of being able to paint songs. Pac-Man
          Namco Toru Iwatani Pac-Man Fever maze dots. Pac-Man May blinks the
          eyes of nails strongly pressed against the chalkboard. Patricia loves
          the sound of nails strongly pressed against the chalkboard.
          <br />
          <br />
          As she walked along the street and looked in the gutter, she realized
          facemasks had become the new cigarette butts. He hated that he loved
          what she hated about hate. She was disgusted he couldn't tell the
          difference between lemonade and limeade. Patricia loves the sound of
          nails strongly pressed against the chalkboard. The external scars tell
          only part of the story.
        </p>
      </div>
      <div className="section section-author">
        <h1>O AUTORZE</h1>
        <p>
          Don't put peanut butter on the dog's nose. Poison ivy grew through the
          fence they said was impenetrable. Pac-Man Namco Toru Iwatani Pac-Man
          Fever maze dots. Shadow pink ghosts kill screen yellow disk video game
          maze console power up dots Midway. He was willing to find the depths
          of the rabbit hole in order to be with her.
          <br />
          <br />
          I think I will buy the red car, or I will lease the blue one. Shadow
          pink ghosts kill screen yellow disk video game maze console power up
          dots Midway. She had the gift of being able to paint songs. Pac-Man
          Namco Toru Iwatani Pac-Man Fever maze dots. Pac-Man May blinks the
          eyes of nails strongly pressed against the chalkboard. Patricia loves
          the sound of nails strongly pressed against the chalkboard.
          <br />
          <br />
          As she walked along the street and looked in the gutter, she realized
          facemasks had become the new cigarette butts. He hated that he loved
          what she hated about hate. She was disgusted he couldn't tell the
          difference between lemonade and limeade. Patricia loves the sound of
          nails strongly pressed against the chalkboard. The external scars tell
          only part of the story.
        </p>
        <img src={authorPhoto} alt="Author" className="author-photo" />
      </div>
    </div>
  );
}

export default About;
