import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useVideosByLanguage } from '../hooks/useVideosByLanguage';
import VideoCard from '../components/VideoCard';

const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';

  const { data: videos, isLoading, error } = useVideosByLanguage(currentLang);

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

  const featuredVideos =
    videos?.filter(video => video.orientation === 'horizontal').slice(0, 3) ||
    [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading videos</div>;

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
      {featuredVideos.length === 0 ? (
        <section className="mt-20 text-xl text-gray-500">
          {t('home.noVideos')}
        </section>
      ) : (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {featuredVideos.map(video => (
            <VideoCard key={video._id} id={video._id} url={video.url} />
          ))}
        </motion.section>
      )}
    </motion.main>
  );
};

export default HomePage;
