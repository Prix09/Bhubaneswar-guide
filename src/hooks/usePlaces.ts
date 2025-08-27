import { useState, useEffect } from 'react';
import { placesApi } from '../services/api';

interface Place {
  id?: string;
  _id?: string;
  name: string;
  description: string;
  location: string;
  category: string;
  imageUrl: string;
  rating?: number;
}

export const usePlaces = (searchTerm?: string, category?: string) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await placesApi.getAll(searchTerm, category);
        setPlaces(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch places');
        console.error('Error fetching places:', err);
        
        // Fallback to mock data if API fails
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
          }
        ];
        
        let filteredPlaces = [...mockPlaces];
        
        if (category) {
          filteredPlaces = filteredPlaces.filter(place => place.category === category);
        }
        
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          filteredPlaces = filteredPlaces.filter(place =>
            place.name.toLowerCase().includes(searchLower) ||
            place.location.toLowerCase().includes(searchLower) ||
            place.description.toLowerCase().includes(searchLower)
          );
        }
        
        setPlaces(filteredPlaces);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [searchTerm, category]);

  return { places, loading, error };
};