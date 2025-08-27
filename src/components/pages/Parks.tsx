import React from "react";

const parks = [
  {
    name: "Nandankanan Zoological Park",
    location: "Barang, Bhubaneswar",
    description: "A famous zoo and botanical garden with rich wildlife & scenic beauty.",
    map: "https://goo.gl/maps/jA9RGy5qJX62",
  },
  {
    name: "Ekamra Kanan Botanical Garden",
    location: "Nayapalli, Bhubaneswar",
    description: "A large botanical garden with rose gardens, cactus houses & boating.",
    map: "https://goo.gl/maps/Yc5HqFh1t5E2",
  },
  {
    name: "Indira Gandhi Park",
    location: "Unit 2, Bhubaneswar",
    description: "A well-maintained city park popular for jogging and evening walks.",
    map: "https://goo.gl/maps/syTiMvgMivN2",
  },
  {
    name: "Biju Patnaik Park",
    location: "Forest Park, Bhubaneswar",
    description: "Known for lush greenery, jogging tracks, and a children’s play area.",
    map: "https://goo.gl/maps/BhB7V1H4Hmk",
  },
  {
    name: "Jayadev Vatika",
    location: "Khandagiri, Bhubaneswar",
    description: "A peaceful park with walking trails, picnic spots, and nature views.",
    map: "https://goo.gl/maps/znNUDy3wV8m",
  },
];

export default function Parks() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-700">Parks in Bhubaneswar</h1>
      <p className="text-gray-600">
        Discover the most beautiful parks in Bhubaneswar to relax and enjoy nature.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {parks.map((park, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{park.name}</h2>
            <p className="text-sm text-gray-500">{park.location}</p>
            <p className="mt-3 text-gray-600">{park.description}</p>
            <a
              href={park.map}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-green-600 hover:underline text-sm"
            >
              🌳 View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}



