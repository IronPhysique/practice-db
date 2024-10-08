import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://172.167.90.18:5000/api', // Updated to the public backend API URL
});

// Add a request interceptor to add the JWT token to the headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
