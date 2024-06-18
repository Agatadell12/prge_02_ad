import React, { useEffect, useState } from "react";
import "./Map.css";
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
        <h1>JEDNOSTKA</h1>
        <strong>Nazwa:</strong> ${feature.properties.Nazwa_jedn}<br/>
        <strong>Adres:</strong> ${feature.properties.Adres}<br/>
      `);
    }
  };

  const pointToLayerJednostki = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db_4326&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          setWojewodztwa(dane.data);
        })
        .catch((error) => {
          console.log(`${error}`);
        });

      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AJednost_woj&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          setJednostki(dane.data);
        })
        .catch((error) => {
          console.log(`${error}`);
        });
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
          <LayersControl.Overlay name="Jednostki Wojskowe">
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
