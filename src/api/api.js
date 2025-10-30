import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // or your mock API URL
});

// Interceptor (optional) to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
