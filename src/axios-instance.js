import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.andrasvargas.com' //was localhost:5001
})

export default instance;