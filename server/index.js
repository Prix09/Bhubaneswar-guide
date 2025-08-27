import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import placesRoutes from './routes/places.js';
import favoritesRoutes from './routes/favorites.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server default port
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/places', placesRoutes);
app.use('/api/favorites', favoritesRoutes);

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/travel_places';
    console.log('🔄 Attempting to connect to MongoDB...');
    await mongoose.connect(mongoURI);
    console.log('📦 Connected to MongoDB');
    
    // Seed data if in development and database is empty
    if (process.env.NODE_ENV === 'development') {
      const Place = (await import('./models/Place.js')).default;
      const count = await Place.countDocuments();
      if (count === 0) {
        console.log('🌱 Seeding initial data...');
        await seedInitialData();
      }
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('⚠️  MongoDB is not available. This is normal for demo purposes.');
    console.log('💡 To use MongoDB:');
    console.log('   1. Install MongoDB: https://docs.mongodb.com/manual/installation/');
    console.log('   2. Start MongoDB service: mongod');
    console.log('   3. Or use MongoDB Atlas cloud service');
    console.log('');
    console.log('🚀 Continuing with mock data for demonstration...');
  }
};

// Simple seed function
const seedInitialData = async () => {
  try {
    const Place = (await import('./models/Place.js')).default;
    
    const samplePlaces = [
      {
        name: "Eiffel Tower",
        description: "Iconic iron lattice tower located in Paris, France",
        location: "Paris, France",
        category: "landmark",
        imageUrl: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
      },
      {
        name: "Great Wall of China", 
        description: "Ancient fortification system in northern China",
        location: "Beijing, China",
        category: "landmark",
        imageUrl: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg"
      },
      {
        name: "Santorini",
        description: "Beautiful Greek island with stunning sunsets and white-washed buildings",
        location: "Santorini, Greece", 
        category: "destination",
        imageUrl: "https://images.pexels.com/photos/161901/santorini-oia-greece-water-161901.jpeg"
      }
    ];

    await Place.insertMany(samplePlaces);
    console.log('✅ Sample places added to database');
  } catch (error) {
    console.log('⚠️  Error seeding data:', error.message);
  }
};

// Start server
const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  });
};

startServer();