import React from "react";

const restaurants = [
  {
    name: "Dalma Restaurant",
    location: "Unit 4, Bhubaneswar",
    description: "Authentic Odia cuisine famous for Dalma, Pakhala, and thalis.",
    map: "https://goo.gl/maps/NXH8o4AqxvH2",
  },
  {
    name: "Truptee Restaurant",
    location: "Kharvela Nagar, Bhubaneswar",
    description: "Popular for South Indian, North Indian, and Odia dishes.",
    map: "https://goo.gl/maps/vu3XG9vqgQK2",
  },
  {
    name: "Zaika",
    location: "Sahid Nagar, Bhubaneswar",
    description: "Multi-cuisine restaurant serving Indian, Chinese & Continental food.",
    map: "https://goo.gl/maps/qyXiyjFTHgE2",
  },
  {
    name: "Mainland China",
    location: "Jaydev Vihar, Bhubaneswar",
    description: "Upscale restaurant known for authentic Chinese fine dining.",
    map: "https://goo.gl/maps/pRzZb7CwGg92",
  },
  {
    name: "BBQ Nation",
    location: "Janpath, Bhubaneswar",
    description: "Buffet-style dining with live grills on the table.",
    map: "https://goo.gl/maps/AvVwKkHZ7g22",
  },
];

export default function Restaurants() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">Restaurants in Bhubaneswar</h1>
      <p className="text-gray-600">
        Explore the best restaurants in Bhubaneswar serving authentic Odia, Indian, and international cuisines.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{restaurant.name}</h2>
            <p className="text-sm text-gray-500">{restaurant.location}</p>
            <p className="mt-3 text-gray-600">{restaurant.description}</p>
            <a
              href={restaurant.map}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-600 hover:underline text-sm"
            >
              🍴 View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



