import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { useTranslation } from 'react-i18next';
import BurguerButton from '../Portfolio/BurguerButton';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';
  const navTabs = [
    { name: t('navbar.portfolio'), path: `/${currentLang}/portfolio` },
    { name: t('navbar.about'), path: `/${currentLang}/about` },
    { name: t('navbar.contact'), path: `/${currentLang}/contact-me` },
  ];

  const { isAuthenticated, logout, token, secretValue } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="px-4 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex max-w-screen-md flex-wrap items-center justify-between">
        <Link to={`/${currentLang}`} onClick={() => setSelected('')}>
          <motion.img
            src="/Logo.webp"
            alt="Logo Portfolio"
            width="92"
            height="72"
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
        <div className="md:hidden" onClick={toggleMenu}>
          <BurguerButton />
        </div>
        {/* Mobile Menu - isMenuOpen Conditional */}
        <div className="w-full md:hidden">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden"
          >
            <NavLinks
              navTabs={navTabs}
              selected={selected}
              setSelected={setSelected}
              className="mt-4 flex flex-col rounded-lg p-4 font-medium shadow-lg"
            />
          </motion.div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavLinks
            navTabs={navTabs}
            selected={selected}
            setSelected={setSelected}
            className="mt-0 flex flex-row space-x-8 border-0 p-0 font-medium rtl:space-x-reverse"
          />
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
              <Link className="hover:text-secondary-orange" to={`/videos`}>
                Videos
              </Link>
            </li>
            <li>
              <Link className="hover:text-secondary-orange" to={`/add-video`}>
                Add Video
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
