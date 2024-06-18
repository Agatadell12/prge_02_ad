import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Databasesolider.css";

const soldiers = [
  {
    rank: "Szeregowy ",
    firstName: "Jacek",
    lastName: "Nieznany",
    unit: "Jednostka Wojskowa 1",
    sorted: true,
    missingItems: "Brak",
  },
  {
    rank: "Sierżant",
    firstName: "Joanna",
    lastName: "Smiałek ",
    unit: "2 Brygada Zmechanizowana",
    sorted: false,
    missingItems: "Kask, buty zimowe, bielizna zimowa",
  },
  {
    rank: "Kapitan",
    firstName: "Michał",
    lastName: "Jakubczyj",
    unit: "5 Pułk Rozpoznawczy",
    sorted: true,
    missingItems: "Brak ",
  },
  {
    rank: "Pułkownik",
    firstName: "Andrzej",
    lastName: "Piotrowski",
    unit: "Jednostka Wojskowa 8",
    sorted: true,
    missingItems: "Brak",
  },
  {
    rank: "Generał brygady",
    firstName: "Paweł",
    lastName: "Grabowski",
    unit: "Jednostka Wojskowa 9",
    sorted: true,
    missingItems: "Brak",
  },
  {
    rank: "Generał dywizji",
    firstName: "Robert",
    lastName: "Zieliński",
    unit: "Jednostka Wojskowa 10",
    sorted: false,
    missingItems: "Kamizelka kuloodporna",
  },
  {
    rank: "Podpułkownik",
    firstName: "Weronika",
    lastName: "Krawczyk",
    unit: "Jednostka Wojskowa 7",
    sorted: false,
    missingItems: "Buty wojskowe",
  },
  {
    rank: "Major",
    firstName: "Małgorzata",
    lastName: "Mazur",
    unit: "Jednostka Wojskowa 6",
    sorted: true,
    missingItems: "Brak",
  },
  {
    rank: "Starszy chorązy sztabowy",
    firstName: "Paweł",
    lastName: "Piotr",
    unit: "Jednostka Wojskowa 3",
    sorted: true,
    missingItems: "Brak",
  },
  {
    rank: "Porucznik",
    firstName: "Katarzyna",
    lastName: "Wójcik",
    unit: "Jednostka Wojskowa 4",
    sorted: true,
    missingItems: "Brak",
  },
];

const DatabaseSoldier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredSoldiers = soldiers.filter(
    (soldier) =>
      soldier.rank.toLowerCase().includes(searchTerm.toLowerCase()) ||
      soldier.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      soldier.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      soldier.unit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <h1>BAZA ŻOŁNIERZY</h1>
        <div className="buttons">
          <button className="button" onClick={() => navigate("/map")}>
            Mapa
          </button>
          <button className="button" onClick={() => navigate("/services")}>
            DOSTĘPNE USŁUGI
          </button>
          <button
            className="button"
            onClick={() => navigate("/dashboardsolider")}
          >
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
            <th>Stopień</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Jednostka</th>
            <th>Czy Pobrał Sorty</th>
            <th>Brakujące Sorty</th>
          </tr>
        </thead>
        <tbody>
          {filteredSoldiers.map((soldier, index) => (
            <tr key={index}>
              <td>{soldier.rank}</td>
              <td>{soldier.firstName}</td>
              <td>{soldier.lastName}</td>
              <td>{soldier.unit}</td>
              <td>{soldier.sorted ? "Tak" : "Nie"}</td>
              <td>{soldier.missingItems}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseSoldier;
