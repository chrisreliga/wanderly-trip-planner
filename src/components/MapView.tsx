import "leaflet/dist/leaflet.css";
import { useState, useEffect, useSyncExternalStore } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";

// Map Updater Function
function MapUpdater({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    map.setView(coordinates, 13);
  }, [coordinates]);

  return null;
}

export default function MapView() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState();

  // Query Function
  const { data, isLoading, isError } = useQuery({
    queryKey: ["location", debouncedSearch],
    queryFn: async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${debouncedSearch}&format=json`,
      );

      return await response.json();
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // Defining the Coordinates based off the data from the API fetch
  const coordinates =
    data && data[0] ? [data[0].lat, data[0].lon] : [37.8, -122.15];

  // Return Statement
  return (
    <div className="map">
      <div className="search-container">
        <form>
          <input
            type="text"
            id="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
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
