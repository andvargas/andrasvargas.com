import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.andrasvargas.com' //was localhost:5001
})

export default instance;