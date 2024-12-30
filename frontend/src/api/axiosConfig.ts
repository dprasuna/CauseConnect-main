// src/api/axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Set your backend URL
  withCredentials: true, // Allows cookies to be sent for authentication
});

export default api;
