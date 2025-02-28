import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import IconCard from '@components/Portfolio/IconCard';
import SkillCard from '@components/Portfolio/SkillCard';
import { skills } from '@data';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <motion.h1
        className="border-secondary-yellow mb-8 rounded-sm border-b-4 p-2 text-left text-2xl font-bold sm:text-4xl md:text-5xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t('about.title')}
      </motion.h1>
      <motion.section className="flex flex-col items-center justify-center gap-6 md:gap-10 lg:flex-row">
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={{ delay: 0.4 }}
            whileHover={{ opacity: 1 }}
            className="mb-2 max-w-xl space-y-4 text-left text-lg sm:text-xl md:text-left"
          >
            <p>{t('about.description')}</p>
            <p>{t('about.paragraph')}</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ opacity: 1 }}
          >
            {skills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </motion.div>
        </div>
        <motion.aside
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl space-y-6 p-4 text-center text-lg font-semibold sm:text-xl md:p-6 lg:p-8"
        >
          <div>
            <p>{t('about.conclusion')}</p>
          </div>
          <motion.button
            className="bg-secondary-yellow text-primary-purple cursor-pointer rounded-full px-6 py-2 text-base font-bold shadow-lg sm:text-lg md:px-8 md:py-3 md:text-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 8px rgb(245,232,61)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('about.button')}
          </motion.button>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex flex-wrap justify-center gap-6 first:hidden sm:gap-10 md:gap-16 lg:gap-20"
          >
            <IconCard icon={<FaFacebookF />} link="https://www.facebook.com" />
            <IconCard icon={<FaTwitter />} link="https://www.twitter.com" />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20"
          >
            <IconCard icon={<FaDiscord />} link="https://www.discord.com" />
            <IconCard icon={<FaInstagram />} link="https://www.instagram.com" />
          </motion.div>
        </motion.aside>
      </motion.section>
    </main>
  );
};

export default AboutPage;
