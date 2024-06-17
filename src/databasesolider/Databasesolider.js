import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Databasesolider.css";

const solider = [
  {
    military_degree: "kapral",
    name: "Michał",
    surname: "Jańczak",
    jednostka_pobraniowa: "1 WOG",
    czypobralsorty: "NIE",
    czegoniepobral: "bielizna ziomowa, beret, buty zimowe, rękawiczki",
  },
  {
    military_degree: "kapral",
    name: "Michał",
    surname: "Jańczak",
    jednostka_pobraniowa: "1 WOG",
    czypobralsorty: "NIE",
    czegoniepobral: "bielizna ziomowa, beret, buty zimowe, rękawiczki",
  },
  {
    military_degree: "kapral",
    name: "Michał",
    surname: "Jańczak",
    jednostka_pobraniowa: "1 WOG",
    czypobralsorty: "NIE",
    czegoniepobral: "bielizna ziomowa, beret, buty zimowe, rękawiczki",
  },
  // Dodaj kolejne jednostki według potrzeby
];

const Database = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUnits = units.filter(
    (unit) =>
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <h1>BAZA ŻOŁNIERZY POBIERAJĄCYCH SORTY MUNDUROWE</h1>
        <div className="buttons">
          <button onClick={() => navigate("/services/map")}>Mapa</button>
          <button onClick={() => navigate("/")}>START</button>
          <button onClick={() => navigate("/dashboardunit")}> WIDOK </button>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Szukaj..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nazwa Jednostki</th>
            <th>Adres</th>
            <th>Godziny Pracy</th>
            <th>Godziny Wydawania Sortów</th>
          </tr>
        </thead>
        <tbody>
          {filteredUnits.map((unit, index) => (
            <tr key={index}>
              <td>{unit.name}</td>
              <td>{unit.address}</td>
              <td>{unit.hours}</td>
              <td>{unit.sortingHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Database;
