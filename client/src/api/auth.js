import axios from './axios';

export const loginRequest = async user => {
  return await axios.post(`/login`, user, { withCredentials: true });
};

export const verifyTokenRequest = () => axios.get('/verify');
