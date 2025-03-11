import { useVideo } from '@context/VideoContext';
import CardVideo from '@components/Dashboard/CardVideo';

const VideosPage = () => {
  const { videos, error } = useVideo();

  if (error) return <div>Error loading videos</div>;

  const horizontalVideos = videos.filter(
    video => video.orientation === 'horizontal'
  );
  const verticalVideos = videos.filter(
    video => video.orientation === 'vertical'
  );
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-wrap">
        {horizontalVideos.map(video => (
          <CardVideo key={video._id} video={video} />
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        {verticalVideos.map(video => (
          <CardVideo key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
