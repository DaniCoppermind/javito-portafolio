import { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createVideoRequest,
  deleteVideoRequest,
  getVideosRequest,
  updateVideoRequest,
} from '../api/videos';

const videoContext = createContext();

export const useVideo = () => {
  const context = useContext(videoContext);

  if (!context) throw new Error('useVideo must be used within a VideoProvider');

  return context;
};

export function VideoProvider({ children }) {
  const queryClient = useQueryClient();

  // GetVideos
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['videos'],
    queryFn: getVideosRequest,
    select: res => res.data,
  });

  const createVideoMutation = useMutation({
    mutationFn: createVideoRequest,
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
    },
  });

  const updateVideoMutation = useMutation({
    mutationFn: ({ id, video }) => updateVideoRequest(id, video),
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
    },
  });

  const deleteVideoMutation = useMutation({
    mutationFn: deleteVideoRequest,
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
    },
  });

  return (
    <videoContext.Provider
      value={{
        videos,
        isLoading,
        error,
        createVideo: createVideoMutation.mutate,
        updateVideo: updateVideoMutation.mutate,
        deleteVideo: deleteVideoMutation.mutate,
      }}
    >
      {children}
    </videoContext.Provider>
  );
}
