import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-andrasvargas-com.herokuapp.com",
});

export default instance;
