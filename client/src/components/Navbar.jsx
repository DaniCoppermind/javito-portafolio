import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Cookies from 'js-cookie';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const token = Cookies.get('loginSecure');
  const secretValue = import.meta.env.VITE_SECRET_KEY;

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="bg-primary-purple my-3 flex justify-between rounded-lg px-10 py-5">
      <h1 className="text-2xl font-bold">
        <Link to="/en">Javito es gay</Link>
      </h1>
      <ul className="flex gap-x-2">
        <li>
          <Link to="/en">Home</Link>
        </li>
        <li>
          <Link to="/en/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/en/about">About</Link>
        </li>
        <li>
          <Link to="/en/contact-me">Contact</Link>
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
