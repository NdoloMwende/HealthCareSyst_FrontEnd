// src/api/axiosClient.ts

import axios from "axios";

/**
 * Axios instance used for making all API requests.
 * Centralizing this makes the code cleaner, easier to maintain,
 * and lets us add interceptors (auth tokens, logging, refresh tokens, etc.)
 */

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
// ➤ REQUEST INTERCEPTOR
axiosClient.interceptors.request.use(
  (config) => {
    // Example: Attach auth token from localStorage/Zustand
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
