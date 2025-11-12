import axions from "axios";

const apiURL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const api = axions.create({
  baseURL: apiURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export { api };
