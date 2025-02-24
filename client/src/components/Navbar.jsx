import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuth();
  const token = Cookies.get('loginSecure');
  const secretValue = import.meta.env.VITE_SECRET_KEY;
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  const currentLang = location.pathname.startsWith('/es') ? 'es' : 'en';

  return (
    <nav className="bg-primary-purple my-3 flex justify-between rounded-lg px-10 py-5">
      <h1 className="text-2xl font-bold">
        <Link to={`/${currentLang}`}>Javito</Link>
      </h1>
      <ul className="flex gap-x-2">
        <li>
          <Link to={`/${currentLang}/portfolio`}>{t('portfolio')}</Link>
        </li>
        <li>
          <Link to={`/${currentLang}/about`}>{t('about')}</Link>
        </li>
        <li>
          <Link to={`/${currentLang}/contact-me`}>{t('contact')}</Link>
        </li>
        {token === secretValue ? (
          isAuthenticated ? (
            <div>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-video">Add Video</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <button onClick={handleClick}>Logout</button>
              </li>
            </div>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
