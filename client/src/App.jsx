import { Route, Routes } from 'react-router-dom'

import AuthorTitle from './components/AuthorTitle'
import Navbar from './components/Navbar'
import Home from './components/Home'
import VideoGallery from './components/VideoGallery'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <header className='p-6 flex justify-between items-center'>
        <AuthorTitle />
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<VideoGallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
