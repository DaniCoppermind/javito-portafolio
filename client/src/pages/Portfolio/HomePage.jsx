import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useVideosByLanguage } from '@hooks/useVideosByLanguage';
import CardVideo from '@components/Portfolio/CardVideo';
import LoaderSkeleton from '@components/skeleton/LoaderSkeleton';

const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';

  const { data: videos, isLoading, error } = useVideosByLanguage(currentLang);

  const featuredVideos = videos
    ?.filter(video => video.orientation === 'horizontal')
    .slice(0, 3);

  if (isLoading) return <LoaderSkeleton />;
  if (error) return <div>Error loading videos</div>;

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-6 text-center"
    >
      <h1 className="mb-6 text-4xl font-bold italic">
        <motion.span
          initial="initial"
          animate="animate"
          className="from-secondary-green to-secondary-yellow inline-block bg-gradient-to-r bg-clip-text text-transparent"
        >
          {t('home.title.line1')}
        </motion.span>{' '}
        {t('home.title.line2')}
      </h1>
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
          className={`my-20 grid grid-cols-1 gap-8 ${featuredVideos.length === 1 ? 'm-auto justify-center md:w-2/4 md:grid-cols-1' : featuredVideos.length < 3 ? `md:grid-cols-${featuredVideos.length}` : 'md:grid-cols-3'}`}
        >
          {featuredVideos.map(video => (
            <CardVideo key={video._id} url={video.url} />
          ))}
        </motion.section>
      )}
    </motion.main>
  );
};

export default HomePage;
