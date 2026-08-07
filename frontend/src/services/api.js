import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-legal-assistant-backend-ysxt.onrender.com",
});

export default api;