import React from "react";
import { Link } from "react-router-dom";
import { FiCoffee, FiMapPin, FiSun, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 1. Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1627895449249-38384f8841a3?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-pink-500/70 animate-gradient-x" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            The Soul of Bhubaneswar
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
            Your personal guide to the city's most cherished cafes, parks, and culinary treasures.
          </p>
          <Link
            to="/map"
            className="mt-8 inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white/30 hover:scale-105 shadow-xl"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* 2. Categories Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Discover Your Next Adventure</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Choose a category to dive into the city's vibrant life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard
            link="/cafes"
            image="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
            title="Cozy Cafés"
            description="Unwind with the perfect brew."
            icon={<FiCoffee size={24} />}
          />
          <CategoryCard
            link="/restaurants"
            image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
            title="Authentic Restaurants"
            description="Taste the heart of Odisha."
            icon={<FiMapPin size={24} />}
          />
          <CategoryCard
            link="/parks"
            image="https://tse3.mm.bing.net/th/id/OIP.k08BTqqeM50JbHPt7kcMUwHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
            title="Serene Parks"
            description="Breathe in the tranquility."
            icon={<FiSun size={24} />}
          />
        </div>
      </section>

      {/* 3. Featured Destination */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl shadow-2xl overflow-hidden aspect-square">
            <img
              src="https://www.hlimg.com/images/things2do/738X538/nandankanan-national-park_1523269323t.jpg"
              alt="Nandankanan Zoological Park"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500">Must Visit</h3>
            <h2 className="text-4xl font-bold mt-2">Nandankanan Zoological Park</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Home to a vast array of wildlife, including the majestic white tiger, Nandankanan offers a captivating experience for nature lovers. Explore the botanical gardens, enjoy a safari, and connect with wildlife in this sprawling sanctuary.
            </p>
            <Link
              to="/map"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800 transition group"
            >
              Find on Map
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Trending Odisha Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Trending in Odisha</h2>
          <p className="mt-3 text-gray-600 text-lg">Explore these celebrated spots—click to dive deeper.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Konark Sun Temple",
              image:
                "https://images.assettype.com/indynetwork/2020-04/7fae3b36-b34d-4420-be8b-83822eeb21c1/Konark_Sun_Temple___Front_Elevation.jpg?w=1170",
              link: "/konark",
              desc: "13th-century UNESCO World Heritage Sun temple shaped like a chariot.",
            },
            {
              name: "Chandrabhaga Beach",
              image:
                "https://www.trawell.in/admin/images/upload/403298814Konark_Chandrabhaga_Beach.jpg",
              link: "/chandrabhaga",
              desc: "Blue Flag certified beach near Konark, known for serene sunrises.",
            },
            {
              name: "Chilika Lake",
              image: "https://travelandtrekking.com/wp-content/uploads/2020/02/kalijai-temple-and-chilika-lake.jpeg",
              link: "/chilika",
              desc: "Asia’s largest brackish-water lagoon, famed for birdlife & estuarine beauty.",
            },
            {
              name: "Bhitarkanika National Park",
              image: "https://tse2.mm.bing.net/th/id/OIP.8siVGuYhAmZGkIvkJgjz1wHaDP?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
              link: "/bhitarkanika",
              desc: "Renowned mangrove forest & wildlife park—home to saltwater crocodiles.",
            },
          ].map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Link to={place.link}>
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold">{index + 1}. {place.name}</h3>
                  <p className="text-gray-600 mt-2">{place.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper Component for Category Cards
const CategoryCard = ({
  link,
  image,
  title,
  description,
  icon,
}: {
  link: string;
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <Link to={link} className="group block rounded-xl shadow-lg overflow-hidden h-96">
    <div className="relative h-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative flex flex-col justify-end h-full p-6 text-white">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-max">{icon}</div>
        <h3 className="text-2xl font-bold mt-4">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  </Link>
);
