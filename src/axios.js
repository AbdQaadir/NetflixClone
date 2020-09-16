import axios from "axios";

// Create an instance of axios with base url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
