import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['landmark', 'destination', 'restaurant', 'hotel', 'activity']
  },
  imageUrl: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  coordinates: {
    latitude: { type: Number },
    longitude: { type: Number }
  }
}, {
  timestamps: true
});

export default mongoose.model('Place', placeSchema);