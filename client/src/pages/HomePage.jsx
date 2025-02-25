import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useVideo } from '../context/VideoContext';
import { useEffect } from 'react';

const HomePage = () => {
  const { getVideos, videos } = useVideo();
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';

  useEffect(() => {
    getVideos();
  }, []);

  const featuredVideos = videos
    .filter(video => video.orientation === 'horizontal')
    .slice(0, 3);

  const gradientAnimation = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-6 text-center"
    >
      <h2 className="mb-6 text-6xl font-bold italic">
        <motion.span
          initial="initial"
          animate="animate"
          variants={gradientAnimation}
          className="from-secondary-green to-secondary-yellow inline-block bg-gradient-to-r bg-clip-text text-transparent"
        >
          {t('home.title.line1')}
        </motion.span>{' '}
        {t('home.title.line2')}
      </h2>
      <p className="mb-8 text-xl">{t('home.subtitle')}</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={`/${currentLang}/portfolio`}
          className="bg-secondary-yellow text-primary-purple hover:bg-secondary-green inline-flex items-center gap-1 space-x-2 rounded-full px-8 py-3 text-lg font-bold transition-colors"
        >
          {t('home.button')}
          <ArrowRight size={20} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {featuredVideos.map(video => (
          <div key={video._id} className="group relative cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-800">
              <iframe src={video.url} className="h-full w-full object-cover" />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default HomePage;
