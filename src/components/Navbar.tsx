import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Bhubaneswar Explorer</h1>
          </div>

          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/cafes" className="hover:text-indigo-600">Cafes</Link>
            <Link to="/restaurants" className="hover:text-indigo-600">Restaurants</Link>
            <Link to="/parks" className="hover:text-indigo-600">Parks</Link>
            <Link to="/map" className="hover:text-indigo-600">Map</Link>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
            <Link to="/register" className="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700">Register</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
