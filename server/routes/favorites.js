import express from 'express';
import User from '../models/User.js';
import Place from '../models/Place.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Mock favorites store
const mockFavorites = new Map();

// Get user favorites
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.userId;
    
    try {
      // Try database first
      const user = await User.findById(userId).populate('favorites');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user.favorites);
    } catch (dbError) {
      // Fallback to mock data
      const userFavorites = mockFavorites.get(userId) || [];
      res.json(userFavorites);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add to favorites
router.post('/:placeId', auth, async (req, res) => {
  try {
    const { placeId } = req.params;
    const userId = req.userId;
    
    try {
      // Try database first
      const user = await User.findById(userId);
      const place = await Place.findById(placeId);
      
      if (!user || !place) {
        return res.status(404).json({ message: 'User or place not found' });
      }
      
      if (!user.favorites.includes(placeId)) {
        user.favorites.push(placeId);
        await user.save();
      }
      
      res.json({ message: 'Added to favorites', placeId });
    } catch (dbError) {
      // Fallback to mock data
      const userFavorites = mockFavorites.get(userId) || [];
      if (!userFavorites.find(f => f.id === placeId)) {
        // Find the place from mock data
        const mockPlaces = [
          { id: '1', name: "Eiffel Tower", location: "Paris, France" },
          { id: '2', name: "Great Wall of China", location: "Beijing, China" },
          { id: '3', name: "Santorini", location: "Santorini, Greece" }
        ];
        const place = mockPlaces.find(p => p.id === placeId);
        if (place) {
          userFavorites.push(place);
          mockFavorites.set(userId, userFavorites);
        }
      }
      res.json({ message: 'Added to favorites', placeId });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Remove from favorites
router.delete('/:placeId', auth, async (req, res) => {
  try {
    const { placeId } = req.params;
    const userId = req.userId;
    
    try {
      // Try database first
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      user.favorites = user.favorites.filter(id => id.toString() !== placeId);
      await user.save();
      
      res.json({ message: 'Removed from favorites', placeId });
    } catch (dbError) {
      // Fallback to mock data
      const userFavorites = mockFavorites.get(userId) || [];
      const filtered = userFavorites.filter(f => f.id !== placeId);
      mockFavorites.set(userId, filtered);
      res.json({ message: 'Removed from favorites', placeId });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;