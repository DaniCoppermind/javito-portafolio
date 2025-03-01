import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavTabs = ({ text, to, selected, setSelected }) => {
  return (
    <Link to={to}>
      <li
        onClick={() => setSelected(text)}
        className={`${selected ? 'from-primary-blue to-primary-purple text-secondary-yellow bg-gradient-to-r' : 'hover:text-secondary-yellow'} relative rounded-md px-3 py-1.5 text-xl transition-colors`}
      >
        <p className="relative z-10">{text}</p>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
          ></motion.span>
        )}
      </li>
    </Link>
  );
};

export default NavTabs;
