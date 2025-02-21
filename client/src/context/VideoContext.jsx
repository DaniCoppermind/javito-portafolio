import { createContext, useContext, useState } from 'react';
import { createVideoRequest, getVideosRequest } from '../api/videos';

const videoContext = createContext();

export const useVideo = () => {
  const context = useContext(videoContext);

  if (!context) throw new Error('useVideo must be used within a VideoProvider');

  return context;
};

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const res = await getVideosRequest();
      setVideos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createVideo = async video => {
    const res = await createVideoRequest(video);
    console.log(res);
  };

  return (
    <videoContext.Provider value={{ videos, createVideo, getVideos }}>
      {children}
    </videoContext.Provider>
  );
}
