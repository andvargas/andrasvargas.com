import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.andrasvargas.com",
});

export default instance;
