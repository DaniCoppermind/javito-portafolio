import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AuthorTitle = () => {
  return (
    <Link to='/'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, color: '#F5E83D' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold cursor-pointer'
        style={{ fontFamily: "'High Jakarta', sans-serif" }}
      >
        Javito
      </motion.h1>
    </Link>
  )
}

export default AuthorTitle
