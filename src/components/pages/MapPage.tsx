import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icons in Vite/CRA bundles
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const places: { name: string; type: string; position: [number, number] }[] = [
  { name: "Bhubaneswar City Center", type: "City", position: [20.2961, 85.8245] },
  { name: "CCD – Esplanade Mall", type: "Cafe", position: [20.296789, 85.823444] },
  { name: "Bocca Café", type: "Cafe", position: [20.3101, 85.8193] },
  { name: "Dalma Restaurant", type: "Restaurant", position: [20.2969, 85.8333] },
  { name: "Trident Hotel Restaurant", type: "Restaurant", position: [20.3017, 85.8172] },
  { name: "IG Park (Indira Gandhi Park)", type: "Park", position: [20.2707, 85.8333] },
  { name: "Nandankanan Zoological Park", type: "Park", position: [20.3952, 85.8189] },
];

const MapPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Map of Bhubaneswar</h2>
      <MapContainer center={[20.2961, 85.8245]} zoom={12} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((p, i) => (
          <Marker key={i} position={p.position}>
            <Popup>
              <strong>{p.type}</strong>: {p.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
