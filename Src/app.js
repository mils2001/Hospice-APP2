import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3010", // Your backend URL
});

export default API;
