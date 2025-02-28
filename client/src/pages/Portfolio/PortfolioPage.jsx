import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoCard = ({ title, thumbnailUrl }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="overflow-hidden rounded-lg bg-purple-700 shadow-lg"
  >
    <img
      src={thumbnailUrl || '/placeholder.svg'}
      alt={title}
      className="h-48 w-full object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  </motion.div>
);

const PortfolioPage = () => {
  const horizontalVideos = [
    {
      id: 1,
      title: 'Video Horizontal 1',
      thumbnailUrl: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 2,
      title: 'Video Horizontal 2',
      thumbnailUrl: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 3,
      title: 'Video Horizontal 3',
      thumbnailUrl: '/placeholder.svg?height=720&width=1280',
    },
  ];

  const verticalVideos = [
    {
      id: 4,
      title: 'Video Vertical 1',
      thumbnailUrl: '/placeholder.svg?height=1280&width=720',
    },
    {
      id: 5,
      title: 'Video Vertical 2',
      thumbnailUrl: '/placeholder.svg?height=1280&width=720',
    },
    {
      id: 6,
      title: 'Video Vertical 3',
      thumbnailUrl: '/placeholder.svg?height=1280&width=720',
    },
  ];

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
              <div key={video.id} className="px-2">
                <VideoCard {...video} />
              </div>
            ))}
          </Slider>
        </section>

        {/* <section>
          <h2 className="mb-4 text-2xl font-semibold">Videos Verticales</h2>
          <Slider {...sliderSettings}>
            {verticalVideos.map(video => (
              <div key={video.id} className="px-2">
                <VideoCard {...video} />
              </div>
            ))}
          </Slider>
        </section> */}
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
