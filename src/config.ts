import axios from "axios";

const apiURL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const api = axios.create({
  baseURL: apiURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export { api };
