import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

// Map Updater Function
function MapUpdater({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    map.setView(coordinates, 16);
  }, [coordinates]);

  return null;
}

export default function MapView() {
  const [searchInput, setSearchInput] = useState("");
  const [coordinates, setCoordinates] = useState([37.8, -122.15]);

  // Async Function
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${searchInput}&format=json`,
    );

    const data = await response.json();

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);
    console.log(lat, lon);

    setCoordinates([lat, lon]);
  }

  return (
    <div className="map">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <MapContainer center={coordinates}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapUpdater coordinates={coordinates} />
        <Marker position={coordinates} />
      </MapContainer>
    </div>
  );
}
