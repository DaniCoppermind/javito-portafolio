import axios from './axios';

export const getVideosRequest = () => axios.get('/videos');

export const getVideoRequest = id => axios.get(`/videos/${id}`);

export const createVideoRequest = video => axios.post('/videos', video);

export const updateVideoRequest = video =>
  axios.put(`/videos/${video._id}`, video);

export const deleteVideoRequest = id => axios.delete(`/videos/${id}`);
