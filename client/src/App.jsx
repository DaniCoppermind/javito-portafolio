import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@context/AuthContext';

import LoginPage from '@pages/Dashboard/LoginPage';
import HomePage from '@pages/Portfolio/HomePage';
import PortfolioPage from '@pages/Portfolio/PortfolioPage';
import AboutPage from '@pages/Portfolio/AboutPage';
import ContactPage from '@pages/Portfolio/ContactPage';
import DashboardPage from '@pages/Dashboard/DashboardPage';
import VideoFormPage from '@pages/Dashboard/VideoFormPage';
import { ProtectedRoute, ProtectedLoginRoute } from './routes';
import VideosPage from '@pages/Dashboard/VideosPage';
import { VideoProvider } from '@context/VideoContext';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
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
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/add-video" element={<VideoFormPage />} />
              <Route path="/videos/:id" element={<VideoFormPage />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
