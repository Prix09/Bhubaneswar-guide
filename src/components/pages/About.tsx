// import React from "react";

// const About: React.FC = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">About Us</h2>
//       <p className="text-gray-700">
//         Bhubaneswar Explorer is your guide to finding the best places in the city — from food to leisure.
//       </p>
//     </div>
//   );
// };

// export default About;



// src/components/pages/About.tsx

// import React from 'react';

import React from "react";

export default function About() {
  return (
    <div className="py-12 px-6 bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6">About Bhubaneswar Guide</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-indigo-600">Bhubaneswar Guide</span> – your go-to platform for discovering the best cafés, restaurants, and parks in the City of Temples.  
          Our mission is to help locals and tourists explore Bhubaneswar with ease by providing curated recommendations and easy navigation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🌆 Explore</h2>
            <p className="text-gray-600">Find amazing places to eat, relax, and enjoy in Bhubaneswar.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🍴 Discover</h2>
            <p className="text-gray-600">From street food to fine dining – experience the best flavors.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">📍 Navigate</h2>
            <p className="text-gray-600">Get directions with maps and explore the city without hassle.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To make Bhubaneswar more connected and accessible through technology.  
            Whether you’re a tourist or a local, we aim to help you discover new places and experiences effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}
