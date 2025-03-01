import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute, ProtectedLoginRoute } from '../routes';

const HomePage = lazy(() => import('@pages/Portfolio/HomePage'));
const PortfolioPage = lazy(() => import('@pages/Portfolio/PortfolioPage'));
const AboutPage = lazy(() => import('@pages/Portfolio/AboutPage'));
const ContactPage = lazy(() => import('@pages/Portfolio/ContactPage'));
const DashboardPage = lazy(() => import('@pages/Dashboard/DashboardPage'));
const VideoFormPage = lazy(() => import('@pages/Dashboard/VideoFormPage'));
const LoginPage = lazy(() => import('@pages/Dashboard/LoginPage'));
const VideosPage = lazy(() => import('@pages/Dashboard/VideosPage'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default AppRoutes;
