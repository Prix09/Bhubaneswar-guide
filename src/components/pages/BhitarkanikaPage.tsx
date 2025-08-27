import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function BhitarkanikaPage() {
  const position: [number, number] = [20.7101, 86.9016]; // Bhitarkanika National Park

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Bhitarkanika National Park</h1>
      <p className="text-lg mb-6">
        Renowned mangrove forest & wildlife park—home to saltwater crocodiles and rich biodiversity.
      </p>

      <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="h-96 w-full mb-6">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Bhitarkanika National Park 🐊</Popup>
        </Marker>
      </MapContainer>

      <Link to="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
