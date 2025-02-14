import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className='mt-20 py-6 text-center'
    >
      <p style={{ fontFamily: "'ITC Franklin Gothic LT Pro', sans-serif" }}>
        © 2024 Javito. All rights reserved.
      </p>
    </motion.footer>
  )
}

export default Footer
