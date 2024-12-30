// // src/components/MapComponent.tsx
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

// // Custom marker icon for events
// const redIcon = new L.Icon({
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
// });

// // Sample event data (replace this with API data if available)
// const eventLocations = [
//     { id: 1, name: 'Food Drive', position: [42.3314, -83.0458] },
//     { id: 2, name: 'Park Cleanup', position: [42.2808, -83.7430] },
//     // Add more event positions here
// ];

// const MapComponent: React.FC = () => {
//     const [userLocation, setUserLocation] = useState<[number, number]>([42.3314, -83.0458]); // Default location (Detroit, MI)

//     // Add search control to the map
//     function SearchControl() {
//         const map = useMap();

//         useEffect(() => {
//             const provider = new OpenStreetMapProvider();
//             const searchControl = new GeoSearchControl({
//                 provider,
//                 style: 'bar',
//                 autoComplete: true,
//                 autoCompleteDelay: 250,
//                 showMarker: false,
//             });

//             map.addControl(searchControl);
//             map.on('geosearch/showlocation', (e: any) => {
//                 setUserLocation([e.location.y, e.location.x]);
//             });

//             return () => map.removeControl(searchControl);
//         }, [map]);

//         return null;
//     }

//     return (
//         <MapContainer center={userLocation} zoom={12} style={{ height: '500px', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             <SearchControl />
            
//             {/* User location marker */}
//             <Marker position={userLocation} icon={new L.Icon.Default()}>
//                 <Popup>Your Location</Popup>
//             </Marker>

//             {/* Event markers */}
//             {eventLocations.map(event => (
//                 <Marker key={event.id} position={event.position} icon={redIcon}>
//                     <Popup>{event.name}</Popup>
//                 </Marker>
//             ))}
//         </MapContainer>
//     );
// };

// export default MapComponent;
