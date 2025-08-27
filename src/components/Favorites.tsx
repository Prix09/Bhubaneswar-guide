import React from "react";
import { useAuth } from "../context/AuthContext";

const Favorites: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center text-gray-600">
        Please log in to see your favorites.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Favorites</h2>
      <ul className="space-y-2">
        <li className="p-3 bg-white rounded shadow">Favorite Place 1</li>
        <li className="p-3 bg-white rounded shadow">Favorite Place 2</li>
      </ul>
    </div>
  );
};

export default Favorites;  // ✅ this fixes your import error
