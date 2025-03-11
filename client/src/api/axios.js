import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://javito-portafolio-backend.onrender.com/api',
  withCredentials: true,
});

export default instance;
