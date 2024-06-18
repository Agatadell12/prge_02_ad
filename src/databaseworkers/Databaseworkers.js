import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Databaseworkers.css";

const workers = [
  {
    firstName: "Jan",
    lastName: "Groźny",
    position: "Dowódca",
    unit: "Wojskowy Oddział Gospodarczy 2",
    location: "Pokój 101",
  },
  {
    firstName: "Adrianna",
    lastName: "Cicha",
    position: "Zastępca Dowódcy",
    unit: "Wojskowy Oddział Gospodarczy 2",
    location: "Pokój 202",
  },
  {
    firstName: "Mateusz",
    lastName: "Kropielnicki",
    position: "Szef Sztabu",
    unit: "Oddział Czysty Mundur w Ślesinie",
    location: "Kancelaria 303",
  },
  {
    firstName: "Marek",
    lastName: "Nowak",
    position: "Specjalista ds. Logistyki",
    unit: "Jednostka Wojskowa 1",
    location: "Pokój 101",
  },
  {
    firstName: "Piotr",
    lastName: "Kowalczyk",
    position: "Oficer Operacyjny",
    unit: "Jednostka Wojskowa 3",
    location: "Pokój 303",
  },
  {
    firstName: "Katarzyna",
    lastName: "Wójcik",
    position: "Specjalista do spraw mundurowych ",
    unit: "Jednostka Wojskowa 1",
    location: "Pokój 404",
  },
  {
    firstName: "Tomasz",
    lastName: "Kaczmarek",
    position: "Magazynier",
    unit: "Jednostka Wojskowa 2",
    location: "Pokój 505",
  },
  {
    firstName: "Monika",
    lastName: "Mazur",
    position: "Szef ochrony",
    unit: "Jednostka Wojskowa 3",
    location: "Pokój 606",
  },
  {
    firstName: "Jacek",
    lastName: "Krawczyk",
    position: "Szef strefy wyjściowej",
    unit: "Jednostka Wojskowa 1",
    location: "Pokój 707",
  },
  {
    firstName: "Magdalena",
    lastName: "Pawlak",
    position: "Specjalista księgowy",
    unit: "Jednostka Wojskowa 2",
    location: "Pokój 808",
  },
  {
    firstName: "Grzegorz",
    lastName: "Dąbrowski",
    position: "Magazynier",
    unit: "Jednostka Wojskowa 3",
    location: "Pokój 909",
  },
  {
    firstName: "Sylwia",
    lastName: "Zielińska",
    position: "Specjalista ds. Personalnych",
    unit: "Jednostka Wojskowa 1",
    location: "Pokój 1001",
  },
];

const Database = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredWorkers = workers.filter(
    (worker) =>
      worker.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="header">
        <h1>BAZA PRACOWNIKÓW</h1>
        <div className="buttons">
          <button className="button" onClick={() => navigate("/mapworkers")}>
            MAPA
          </button>
          <button className="button" onClick={() => navigate("/services")}>
            DOSTĘPNE USŁUGI
          </button>
          <button
            className="button"
            onClick={() => navigate("/dashboardworkers")}
          >
            WIDOK
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
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Stanowisko pracy</th>
            <th>Jednostka</th>
            <th>Siedziba</th>
          </tr>
        </thead>
        <tbody>
          {filteredWorkers.map((worker, index) => (
            <tr key={index}>
              <td>{worker.firstName}</td>
              <td>{worker.lastName}</td>
              <td>{worker.position}</td>
              <td>{worker.unit}</td>
              <td>{worker.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Database;
