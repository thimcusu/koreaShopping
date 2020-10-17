import axios from "axios";

const baseURL = process.env.API_URL.endsWith("api")
  ? process.env.API_URL
  : `${process.env.API_URL}/api`;

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
