const API_BASE_URL = 'http://localhost:5000/api';

// API utility functions
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || `HTTP ${response.status}`);
  }
  return response.json();
};

// Auth API
export const authApi = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ email, password })
    });
    const data = await handleApiResponse(response);
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data;
  },

  register: async (name: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ name, email, password })
    });
    const data = await handleApiResponse(response);
    if (data.token) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
};

// Places API  
export const placesApi = {
  getAll: async (search?: string, category?: string) => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (category) params.append('category', category);
    
    const response = await fetch(`${API_BASE_URL}/places?${params.toString()}`, {
      headers: getAuthHeaders()
    });
    return handleApiResponse(response);
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/places/${id}`, {
      headers: getAuthHeaders()
    });
    return handleApiResponse(response);
  }
};

// Favorites API
export const favoritesApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      headers: getAuthHeaders()
    });
    return handleApiResponse(response);
  },

  add: async (placeId: string) => {
    const response = await fetch(`${API_BASE_URL}/favorites/${placeId}`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return handleApiResponse(response);
  },

  remove: async (placeId: string) => {
    const response = await fetch(`${API_BASE_URL}/favorites/${placeId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return handleApiResponse(response);
  }
};

// Health check
export const healthCheck = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return handleApiResponse(response);
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};