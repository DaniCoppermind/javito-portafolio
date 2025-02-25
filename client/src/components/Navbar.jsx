import { motion } from 'framer-motion';
import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import NavTabs from './NavTabs';

const Navbar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout, token, secretValue } = useAuth();
  const location = useLocation();
  const [selected, setSelected] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';

  const navTabs = [
    { name: t('portfolio'), path: `/${currentLang}/portfolio` },
    { name: t('about'), path: `/${currentLang}/about` },
    { name: t('contact'), path: `/${currentLang}/contact-me` },
  ];

  return (
    <motion.nav
      className="sticky z-20 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to={`/${currentLang}`}
          className="flex items-center space-x-3"
          onClick={() => setSelected('')}
        >
          <motion.img
            src="/Logo.png"
            alt="Logo Portfolio"
            className="h-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
          />
        </Link>
        <span className="sr-only">Go to Homepage</span>
        <button
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm hover:bg-gray-100 focus:ring-1 focus:outline-none md:hidden dark:text-gray-400"
        >
          <span className="sr-only">Open Main Menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
            {navTabs.map(tab => (
              <NavTabs
                text={tab.name}
                to={tab.path}
                selected={selected === tab.name}
                setSelected={setSelected}
                key={tab.name}
              />
            ))}
          </ul>
        </div>
      </div>
      {token === secretValue ? (
        isAuthenticated ? (
          <ul className="hidden items-center justify-end gap-4 md:flex">
            <li>
              <Link className="hover:text-secondary-orange" to={`/dashboard`}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-orange" to={`/add-video`}>
                Add Video
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-orange" to={`/videos`}>
                Videos
              </Link>
            </li>
            <li>
              <button
                className="hover:text-secondary-orange"
                onClick={handleClick}
              >
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-end">
            <li>
              <Link to={`/login`}>Login</Link>
            </li>
          </ul>
        )
      ) : null}
    </motion.nav>
  );
};

export default Navbar;
