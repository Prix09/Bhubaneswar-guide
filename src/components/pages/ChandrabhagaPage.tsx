import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function ChandrabhagaPage() {
  const position: [number, number] = [19.8991, 86.0976]; // Chandrabhaga Beach

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Chandrabhaga Beach</h1>
      <p className="text-lg mb-6">
        Blue Flag certified beach near Konark, perfect for sunrise views and relaxing walks along the shore.
      </p>

      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-96 w-full mb-6">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Chandrabhaga Beach 🏖️</Popup>
        </Marker>
      </MapContainer>

      <Link to="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
