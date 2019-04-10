import axios from 'axios';

const api = axios.create({
  baseURL: 'https://maxmaccari-omnistack-backend.herokuapp.com'
});

export default api;
