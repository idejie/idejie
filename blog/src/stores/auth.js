import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Updated to Uvicorn's default port 8000

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(null);

  const initializeAuth = () => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    if (storedToken && storedUser) {
      token.value = storedToken;
      user.value = JSON.parse(storedUser);
    }
  };

  const login = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || data.message || 'Login failed.');
    }

    user.value = data.user;
    token.value = data.access_token;
    localStorage.setItem('authToken', data.access_token);
    localStorage.setItem('authUser', JSON.stringify(data.user));

    return data.user;
  };

  const register = async (username, email, password) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || data.message || 'Registration failed.');
    }

    return data;
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  return {
    user,
    token,
    initializeAuth,
    login,
    register,
    logout,
  };
}); 