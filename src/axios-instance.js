import axios from "axios";
let baseURL = "https://api.andrasvargas.com";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:5001";
}

const instance = axios.create({
  baseURL,
  timeout: 10000,
  //withCredentials: false,
  //"Access-Control-Allow-Credentials": true,
});

export default instance;
