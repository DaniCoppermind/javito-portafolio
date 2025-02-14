import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'

const Mockup = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center'
      >
        <h2
          className='text-6xl mb-6'
          style={{ fontFamily: "'Prohibition', sans-serif" }}
        >
          Video Editing Magic
        </h2>
        <p
          className='text-xl mb-8'
          style={{ fontFamily: "'ITC Franklin Gothic LT Pro', sans-serif" }}
        >
          Transforming your ideas into captivating visual stories
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to='/portfolio'
            className='bg-[#F5E83D] text-[#492B7A] py-3 px-8 rounded-full inline-flex items-center space-x-2 font-bold text-lg hover:bg-[#ABC612] transition-colors'
          >
            <span>View Portfolio</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'
      >
        {[1, 2, 3].map((index) => (
          <div key={index} className='relative group cursor-pointer'>
            <div className='aspect-video bg-gray-800 rounded-lg overflow-hidden'>
              <img
                src='https://placehold.co/1280x720'
                alt={`Featured video ${index}`}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <Play size={48} className='text-white' />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Mockup
