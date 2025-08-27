import express from 'express';
import Place from '../models/Place.js';

const router = express.Router();

// Mock places for demo
const mockPlaces = [
  {
    id: '1',
    name: "Eiffel Tower",
    description: "Iconic iron lattice tower located in Paris, France. A symbol of romance and architectural brilliance.",
    location: "Paris, France",
    category: "landmark",
    imageUrl: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    rating: 4.8
  },
  {
    id: '2',
    name: "Great Wall of China",
    description: "Ancient fortification system in northern China, stretching over 13,000 miles.",
    location: "Beijing, China", 
    category: "landmark",
    imageUrl: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg",
    rating: 4.9
  },
  {
    id: '3',
    name: "Santorini",
    description: "Beautiful Greek island with stunning sunsets, white-washed buildings, and crystal-clear waters.",
    location: "Santorini, Greece",
    category: "destination", 
    imageUrl: "https://images.pexels.com/photos/161901/santorini-oia-greece-water-161901.jpeg",
    rating: 4.7
  },
  {
    id: '4',
    name: "Machu Picchu",
    description: "Ancient Incan citadel set high in the Andes Mountains in Peru.",
    location: "Cusco, Peru",
    category: "landmark",
    imageUrl: "https://images.pexels.com/photos/2516401/pexels-photo-2516401.jpeg",
    rating: 4.9
  },
  {
    id: '5',
    name: "Bali Beaches",
    description: "Tropical paradise with pristine beaches, lush rice terraces, and vibrant culture.",
    location: "Bali, Indonesia",
    category: "destination",
    imageUrl: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg",
    rating: 4.6
  },
  {
    id: '6',
    name: "Swiss Alps",
    description: "Breathtaking mountain range perfect for skiing, hiking, and scenic views.",
    location: "Switzerland",
    category: "destination",
    imageUrl: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg",
    rating: 4.8
  }
];

// Get all places
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    
    try {
      // Try database first
      let query = {};
      if (category) query.category = category;
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ];
      }

      const places = await Place.find(query).sort({ createdAt: -1 });
      res.json(places);
    } catch (dbError) {
      // Fallback to mock data
      let filteredPlaces = [...mockPlaces];
      
      if (category) {
        filteredPlaces = filteredPlaces.filter(place => place.category === category);
      }
      
      if (search) {
        const searchLower = search.toLowerCase();
        filteredPlaces = filteredPlaces.filter(place =>
          place.name.toLowerCase().includes(searchLower) ||
          place.location.toLowerCase().includes(searchLower) ||
          place.description.toLowerCase().includes(searchLower)
        );
      }
      
      res.json(filteredPlaces);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get place by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    try {
      // Try database first
      const place = await Place.findById(id);
      if (!place) {
        return res.status(404).json({ message: 'Place not found' });
      }
      res.json(place);
    } catch (dbError) {
      // Fallback to mock data
      const place = mockPlaces.find(p => p.id === id);
      if (!place) {
        return res.status(404).json({ message: 'Place not found' });
      }
      res.json(place);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;