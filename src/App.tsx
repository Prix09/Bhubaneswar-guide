import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";


// Pages
// Correct path
import Home from "./components/pages/Home";
import Cafes from "./components/pages/Cafes";
import Restaurants from "./components/pages/Restaurants";
import Parks from "./components/pages/Parks";
import MapPage from "./components/pages/MapPage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import KonarkPage from "./components/pages/KonarkPage";
import ChandrabhagaPage from "./components/pages/ChandrabhagaPage";
import ChilikaPage from "./components/pages/ChilikaPage";
import BhitarkanikaPage from "./components/pages/BhitarkanikaPage";


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cafes" element={<Cafes />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/parks" element={<Parks />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/konark" element={<KonarkPage />} />
              <Route path="/chandrabhaga" element={<ChandrabhagaPage />} />
              <Route path="/chilika" element={<ChilikaPage />} />
              <Route path="/bhitarkanika" element={<BhitarkanikaPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
