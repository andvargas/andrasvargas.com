import axios from "axios";

const base = "http://api.andrasvargas.com" || "https://api-andrasvargas-com.herokuapp.com";

const instance = axios.create({
  baseURL: base, //was https://
});

export default instance;
