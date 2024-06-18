import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Database.css";

const units = [
  {
    name: "Jednostka Wojskowa 1",
    address: "Adres 1",
    hours: "8:00 - 16:00",
    sortingHours: "10:00 - 12:00",
  },
  {
    name: "Jednostka Wojskowa 2",
    address: "Adres 2",
    hours: "8:00 - 16:00",
    sortingHours: "13:00 - 15:00",
  },
  {
    name: "Jednostka Wojskowa 3",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Jednostka Wojskowa 4",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Wojskowy Oddział Gospodarczy 2",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Oddział Czysty Mundur w Ślesinie",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Jednostka Wojskowa 6",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Jednostka Wojskowa 7",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Jednostka Wojskowa 8",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
  {
    name: "Jednostka Wojskowa 9",
    address: "Adres 3",
    hours: "8:00 - 16:00",
    sortingHours: "11:00 - 13:00",
  },
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
        <h1>BAZA ODDZIAŁÓW</h1>
        <div className="buttons">
          <button className="button" onClick={() => navigate("/map")}>
            MAPA
          </button>
          <button className="button" onClick={() => navigate("/services")}>
            DOSTĘPNE USŁUGI
          </button>
          <button className="button" onClick={() => navigate("/dashboardunit")}>
            {" "}
            WIDOK{" "}
          </button>
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
