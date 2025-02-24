import { createContext, useContext, useState } from 'react';
import {
  createVideoRequest,
  getVideosRequest,
  deleteVideoRequest,
  getVideoRequest,
  updateVideoRequest,
} from '../api/videos';

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
      console.error(error);
    }
  };

  const createVideo = async video => {
    try {
      const res = await createVideoRequest(video);
      setVideos([...videos, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVideo = async id => {
    try {
      if (window.confirm('¿Deseas eliminar este video?')) {
        const res = await deleteVideoRequest(id);

        if (res.status === 204)
          setVideos(videos.filter(video => video._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getVideo = async id => {
    try {
      const res = await getVideoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateVideo = async (id, video) => {
    try {
      await updateVideoRequest(id, video);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <videoContext.Provider
      value={{
        videos,
        createVideo,
        getVideos,
        deleteVideo,
        getVideo,
        updateVideo,
      }}
    >
      {children}
    </videoContext.Provider>
  );
}
