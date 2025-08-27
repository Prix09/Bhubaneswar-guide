import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function KonarkPage() {
  const position: [number, number] = [19.8873, 86.0940]; // Konark Sun Temple

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Konark Sun Temple</h1>
      <p className="text-lg mb-6">
        13th-century UNESCO World Heritage Sun temple shaped like a chariot. Explore the beautiful Konark beach nearby.
      </p>

      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-96 w-full mb-6">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Konark Sun Temple 🌞</Popup>
        </Marker>
      </MapContainer>

      <Link to="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
