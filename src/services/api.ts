// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // ✅ Agregado /api
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // ✅ necesario si usas Sanctum o cookies
});

export default api;
