import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-purple-cloud.herokuapp.com",
});

export default api;