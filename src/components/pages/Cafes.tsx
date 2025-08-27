import React from "react";

const cafes = [
  {
    name: "CCD - Café Coffee Day",
    location: "Janpath, Bhubaneswar",
    description: "Popular chain café offering coffee, snacks, and a cozy atmosphere.",
    map: "https://goo.gl/maps/PCWM75EqGzA2", 
  },
  {
    name: "Bocca Café",
    location: "IRC Village, Nayapalli",
    description: "Trendy café with indoor & outdoor seating, continental food, and desserts.",
    map: "https://goo.gl/maps/px7p5hBxtro", 
  },
  {
    name: "Blueberrys Café",
    location: "Sahid Nagar, Bhubaneswar",
    description: "Known for fast food, milkshakes, and pocket-friendly prices.",
    map: "https://goo.gl/maps/Ma6RVK1xojG2", 
  },
  {
    name: "Chai Break",
    location: "Patia, Bhubaneswar",
    description: "Perfect spot for tea lovers, Italian & Chinese dishes also served.",
    map: "https://goo.gl/maps/5j2A4pFJ7W42", 
  },
  {
    name: "Story Cafe",
    location: "Jagamara, Bhubaneswar",
    description: "Book-themed café with great coffee, sandwiches, and a cozy reading vibe.",
    map: "https://goo.gl/maps/HfJXGEmPg842", 
  },
];

export default function Cafes() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">Cafés in Bhubaneswar</h1>
      <p className="text-gray-600">
        Here are some popular cafés in Bhubaneswar where you can relax, work, or hang out with friends.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cafes.map((cafe, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{cafe.name}</h2>
            <p className="text-sm text-gray-500">{cafe.location}</p>
            <p className="mt-3 text-gray-600">{cafe.description}</p>
            <a
              href={cafe.map}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-600 hover:underline text-sm"
            >
              📍 View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
