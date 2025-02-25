import axios from './axios';

const API = 'https://javito-portafolio-backend.onrender.com/api';

export const loginRequest = async user => {
  return await axios.post(`${API}/login`, user, { withCredentials: true });
};

export const verifyTokenRequest = () => axios.get('/verify');
