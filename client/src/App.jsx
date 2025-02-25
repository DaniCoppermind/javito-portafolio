import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import VideoFormPage from './pages/VideoFormPage';
import { ProtectedRoute, ProtectedLoginRoute } from './routes';
import VideosPage from './pages/VideosPage';
import { VideoProvider } from './context/VideoContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Rutas en inglés */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/portfolio" element={<PortfolioPage />} />
            <Route path="/en/about" element={<AboutPage />} />
            <Route path="/en/contact-me" element={<ContactPage />} />
            {/* Rutas en español */}
            <Route path="/es" element={<HomePage />} />
            <Route path="/es/portfolio" element={<PortfolioPage />} />
            <Route path="/es/about" element={<AboutPage />} />
            <Route path="/es/contact-me" element={<ContactPage />} />

            {/* Rutas Admin */}
            <Route element={<ProtectedLoginRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/add-video" element={<VideoFormPage />} />
              <Route path="/videos/:id" element={<VideoFormPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
