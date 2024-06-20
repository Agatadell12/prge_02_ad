import React, { useEffect, useState } from "react";
import "./Mapworkers.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

function Map() {
  const [wojewodztwa, setWojewodztwa] = useState(null);
  const [jednostki, setJednostki] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
        <h1>DANE WOJEWÓDZTWA</h1>
        <strong>Nazwa:</strong> ${feature.properties.jpt_nazwa_}<br/>
        <strong>Powierzchnia:</strong> ${feature.properties.jpt_powier}<br/>
        <img src=${feature.properties.source} alt="Lamp" width="32" height="32"/> 
      `);
    }
  };

  const makePopupJednostki = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
        <h1>PRACOWNICY</h1>
        <strong>Nazwisko:</strong> ${feature.properties.nazwisko}<br/>
        <strong>Jednostka wojskowa:</strong> ${feature.properties.jednostka}<br/>
        <strong>Stanowisko pracy:</strong> ${feature.properties.stano_prac}<br/>
      `);
    }
  };

  const pointToLayerJednostki = (feature, latlng) => {
    const iconUrl = feature.properties.img || "default_icon_url.png";
    const icon = L.icon({
      iconUrl: iconUrl,
      iconSize: [100, 100],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    });

    return L.marker(latlng, { icon });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const responseWojewodztwa = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db_4326&maxFeatures=50&outputFormat=application%2Fjson",
          {
            responseType: "blob",
          }
        );
        const wojewodztwaText = await responseWojewodztwa.data.text();
        const wojewodztwaData = JSON.parse(wojewodztwaText);
        setWojewodztwa(wojewodztwaData);

        const responseJednostki = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apracownicy_4326&maxFeatures=50&outputFormat=application%2Fjson",
          {
            responseType: "blob",
          }
        );
        const jednostkiText = await responseJednostki.data.text();
        const jednostkiData = JSON.parse(jednostkiText);
        setJednostki(jednostkiData);
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getData();
  }, []);

  return (
    <div className="map">
      <MapContainer center={[52.2322222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Granice województw DB">
            <WMSTileLayer
              layers="granice_wojewodztw"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Granice województw DB WFS">
            {wojewodztwa ? (
              <GeoJSON data={wojewodztwa} onEachFeature={makePopup} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Pracownicy w jednostkach wojskowych">
            {jednostki ? (
              <GeoJSON
                data={jednostki}
                pointToLayer={pointToLayerJednostki}
                onEachFeature={makePopupJednostki}
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
