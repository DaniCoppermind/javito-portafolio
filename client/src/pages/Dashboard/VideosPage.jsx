import { useVideo } from '@context/VideoContext';
import CardVideo from '@components/Dashboard/CardVideo';

const VideosPage = () => {
  const { videos, isLoading, error } = useVideo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading videos</div>;

  return (
    <div>
      {videos.map(video => (
        <CardVideo key={video._id} video={video} />
      ))}
    </div>
    // <div>
    //   {videos.map(video => (
    //     <div key={video._id} className="video-wrapper">
    //       {video.orientation === 'horizontal' ? (
    //         <HorizontalVideo url={video.url} id={video._id} />
    //       ) : (
    //         <VerticalVideo url={video.url} id={video._id} />
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
};

export default VideosPage;
