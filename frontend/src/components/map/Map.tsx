import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import uselocalStorage from "../hooks/useLocalStorage";
import useGeolocation from "../hooks/useGeolocation";

interface MapProps {
  height: string;
  width: string;
}

const Map: React.FC<MapProps> = ({ height, width }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const userMarkerRef = useRef<leaflet.Marker | null>(null);
  const mapInstance = useRef<leaflet.Map | null>(null); // Add a ref to store the map instance

  const [userPosition, setUserPosition] = uselocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const location = useGeolocation();

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize map only if it's not already initialized
      mapInstance.current = leaflet
        .map(mapRef.current)
        .setView([userPosition.latitude, userPosition.longitude], 13);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapInstance.current); // Use the map instance to add the tile layer
    }
  }, []);

  useEffect(() => {
    setUserPosition({ ...userPosition });

    if (userMarkerRef.current) {
      mapInstance.current?.removeLayer(userMarkerRef.current!);
    }

    userMarkerRef.current = leaflet
      .marker([location.latitude, location.longitude])
      .addTo(mapInstance.current!)
      .bindPopup("You are here!");

    mapInstance.current?.setView([location.latitude, location.longitude]);
  }, [location, userPosition.latitude, userPosition.longitude]);

  return (
    <div 
      id="map" 
      ref={mapRef} 
      style={{ 
        height,
        width,
        position: "relative",
        zIndex: 1,
      }}
    />
  );
};

export default Map;


