import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavTabs = ({ text, to, selected, setSelected }) => {
  return (
    <li
      onClick={() => setSelected(text)}
      className={`${selected ? 'from-primary-blue to-primary-purple bg-gradient-to-r text-white' : 'hover:text-secondary-yellow'} relative rounded-md px-2.5 py-0.5 text-lg transition-colors`}
    >
      <Link to={to} className="relative z-10">
        {text}
      </Link>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600"
        ></motion.span>
      )}
    </li>
  );
};

export default NavTabs;
