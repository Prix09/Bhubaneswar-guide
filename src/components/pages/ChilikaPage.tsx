import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function ChilikaPage() {
  const position: [number, number] = [19.6871, 85.2606]; // Chilika Lake

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Chilika Lake</h1>
      <p className="text-lg mb-6">
        Asia’s largest brackish-water lagoon, famous for birdlife, boating, and serene estuarine landscapes.
      </p>

      <MapContainer center={position} zoom={11} scrollWheelZoom={false} className="h-96 w-full mb-6">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Chilika Lake 🌊</Popup>
        </Marker>
      </MapContainer>

      <Link to="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
