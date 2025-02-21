import axios from './axios';

const API = 'http://localhost:4000/api';

export const loginRequest = async user => {
  return await axios.post(`${API}/login`, user, { withCredentials: true });
};

export const verifyTokenRequest = () => axios.get('/verify');
