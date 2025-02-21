import { useEffect } from 'react';
import { useVideo } from '../context/VideoContext';
import VerticalVideo from '../components/VerticalVideo';
import HorizontalVideo from '../components/HorizontalVideo';

const VideosPage = () => {
  const { getVideos, videos } = useVideo();

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      {videos.map(video => (
        <div key={video._id} className="video-wrapper">
          {video.typeOfVideo ? (
            <HorizontalVideo url={video.url} />
          ) : (
            <VerticalVideo url={video.url} />
          )}
        </div>
      ))}
    </div>
  );
};

export default VideosPage;
