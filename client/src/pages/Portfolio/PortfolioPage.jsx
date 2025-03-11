import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useVideo } from '@context/VideoContext';

const VideoCard = ({ video }) =>
  video.orientation === 'horizontal' ? (
    <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden">
      <iframe src={video.url} className="h-52 w-full" />
    </motion.div>
  ) : (
    <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden">
      <iframe src={video.url} className="h-100 w-full"></iframe>
    </motion.div>
  );

const PortfolioPage = () => {
  const { videos } = useVideo();

  const horizontalVideos = videos.filter(
    video => video.orientation === 'horizontal'
  );
  const verticalVideos = videos.filter(
    video => video.orientation === 'vertical'
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Mi Portafolio</h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Videos Horizontales</h2>
          <Slider {...sliderSettings}>
            {horizontalVideos.map(video => (
              <div key={video._id} className="px-2">
                <VideoCard video={video} />
              </div>
            ))}
          </Slider>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Videos Verticales</h2>
          <Slider {...sliderSettings}>
            {verticalVideos.map(video => (
              <div key={video._id}>
                <VideoCard video={video} />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
