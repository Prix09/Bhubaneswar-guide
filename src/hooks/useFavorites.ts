import { useState, useEffect } from 'react';
import { favoritesApi } from '../services/api';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const data = await favoritesApi.getAll();
      const favoriteIds = data.map((fav: any) => fav.id || fav._id);
      setFavorites(favoriteIds);
    } catch (error) {
      console.error('Error loading favorites:', error);
      // Load from localStorage as fallback
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = async (placeId: string) => {
    try {
      await favoritesApi.add(placeId);
      const newFavorites = [...favorites, placeId];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error adding to favorites:', error);
      // Fallback to localStorage
      const newFavorites = [...favorites, placeId];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = async (placeId: string) => {
    try {
      await favoritesApi.remove(placeId);
      const newFavorites = favorites.filter(id => id !== placeId);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error removing from favorites:', error);
      // Fallback to localStorage
      const newFavorites = favorites.filter(id => id !== placeId);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const isFavorite = (placeId: string) => {
    return favorites.includes(placeId);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    refresh: loadFavorites
  };
};