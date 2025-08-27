import mongoose from "mongoose";
import dotenv from "dotenv";
import Place from "./models/Place.js";

// 1. Configure environment variables once at the top.
dotenv.config();
if (!process.env.MONGO_URI) {
  console.error("🔥 FATAL ERROR: MONGO_URI is not defined in your .env file.");
  process.exit(1); // Exit the script immediately
}
// END DEBUGGING BLOCK

console.log("✅ MONGO_URI loaded successfully."); 

const places = [
  // Landmarks
  {
    name: "Konark Sun Temple",
    description: "13th-century UNESCO World Heritage Sun temple shaped like a chariot.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Konark_Sun_Temple.jpg",
    category: "landmark",
    link: "/konark",
    latitude: 19.887,
    longitude: 86.094
  },
  {
    name: "Chandrabhaga Beach",
    description: "Beautiful golden beach near Konark, perfect for sunset views.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Chandrabhaga_Beach_India.jpg",
    category: "landmark",
    link: "/chandrabhaga",
    latitude: 19.878,
    longitude: 86.093
  },
  {
    name: "Chilika Lake",
    description: "Asia's largest brackish water lagoon, home to migratory birds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Chilika_Lake.jpg",
    category: "landmark",
    link: "/chilika",
    latitude: 19.707,
    longitude: 85.291
  },
  {
    name: "Bhitarkanika National Park",
    description: "A unique ecosystem with mangroves and saltwater crocodiles.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bhitarkanika.jpg",
    category: "landmark",
    link: "/bhitarkanika",
    latitude: 20.731,
    longitude: 86.898
  },

  // Cafes
  {
    name: "Café Coffee Day Janpath",
    description: "Popular café to relax with coffee and snacks.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1955&auto=format&fit=crop",
    category: "cafe",
    link: "/cafes",
    latitude: 20.271,
    longitude: 85.841
  },
  {
    name: "Bocca Café",
    description: "Modern café serving espresso, breakfast, and desserts.",
    image: "https://images.unsplash.com/photo-1589927986089-35812389fcc7?q=80&w=1955&auto=format&fit=crop",
    category: "cafe",
    link: "/cafes",
    latitude: 20.270,
    longitude: 85.841
  },

  // Parks
  {
    name: "Brahmapur Park",
    description: "Serene park with walking paths and greenery.",
    image: "https://images.unsplash.com/photo-1596561260330-7438656113b4?q=80&w=1974&auto=format&fit=crop",
    category: "park",
    link: "/parks",
    latitude: 20.273,
    longitude: 85.841
  },
  {
    name: "Bindu Sagar Park",
    description: "Historic park near temples, ideal for relaxing walks.",
    image: "https://images.unsplash.com/photo-1617196038430-bc1d45b034d4?q=80&w=1974&auto=format&fit=crop",
    category: "park",
    link: "/parks",
    latitude: 20.269,
    longitude: 85.841
  }
];

const seedDB = async () => {
  try {
    // 2. Await the connection and log success.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful! 🚀");

    // Clear existing data
    await Place.deleteMany({});
    console.log("Existing places cleared. 🧹");

    // Insert new data
    await Place.insertMany(places);
    console.log("New places have been seeded successfully! 🌱");

  } catch (err) {
    // 3. Log errors more clearly.
    console.error("🔥 Error seeding the database:", err);
  } finally {
    // 4. Ensure the connection is always closed.
    await mongoose.disconnect();
    console.log("Database connection closed. 👋");
  }
};

seedDB();