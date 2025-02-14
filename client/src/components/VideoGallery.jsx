import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react'

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: 'Client Project A',
      thumbnail: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 2,
      title: 'Music Video B',
      thumbnail: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 3,
      title: 'Commercial C',
      thumbnail: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 4,
      title: 'Short Film D',
      thumbnail: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 5,
      title: 'Corporate Video E',
      thumbnail: '/placeholder.svg?height=720&width=1280',
    },
    {
      id: 6,
      title: 'Wedding Highlight F',
      thumbnail: '/placeholder.svg?height=720&width=1280',
    },
  ]

  return (
    <div className='text-white mt-10'>
      <h2
        className='text-4xl mb-8 text-center'
        style={{ fontFamily: "'Prohibition', sans-serif" }}
      >
        Video Portfolio
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative group cursor-pointer'
            onClick={() => setSelectedVideo(video)}
          >
            <div className='aspect-video bg-gray-800 rounded-lg overflow-hidden'>
              <img
                src={video.thumbnail || '/placeholder.svg'}
                alt={video.title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <Play size={48} className='text-white' />
            </div>
            <h3
              className='mt-2 text-lg'
              style={{
                fontFamily: "'ITC Franklin Gothic LT Pro', sans-serif",
              }}
            >
              {video.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'
          >
            <div className='relative w-full max-w-4xl'>
              <button
                onClick={() => setSelectedVideo(null)}
                className='absolute top-4 right-4 text-white hover:text-[#F5E83D] transition-colors'
              >
                <X size={24} />
              </button>
              <div className='aspect-video bg-gray-800'>
                {/* Replace with actual video player */}
                <img
                  src='https://placehold.co/1280x720'
                  alt={selectedVideo.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='mt-4 flex justify-between items-center'>
                <button className='text-white hover:text-[#F5E83D] transition-colors'>
                  <ChevronLeft size={24} />
                </button>
                <h3
                  className='text-xl text-white'
                  style={{
                    fontFamily: "'ITC Franklin Gothic LT Pro', sans-serif",
                  }}
                >
                  {selectedVideo.title}
                </h3>
                <button className='text-white hover:text-[#F5E83D] transition-colors'>
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoGallery
