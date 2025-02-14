import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex space-x-6'
      >
        <li>
          <Link to='/' className='hover:text-[#F5E83D] transition-colors'>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/portfolio'
            className='hover:text-[#F5E83D] transition-colors'
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-[#F5E83D] transition-colors'>
            About
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className='hover:text-[#F5E83D] transition-colors'
          >
            Contact
          </Link>
        </li>
      </motion.ul>
    </nav>
  )
}

export default Navbar
