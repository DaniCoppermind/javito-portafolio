import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Cookies from 'js-cookie';

export function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated && !loading) return <Navigate to="/" replace />;

  return <Outlet />;
}

export function ProtectedLoginRoute() {
  const token = Cookies.get('loginSecure');
  const secretValue = import.meta.env.VITE_SECRET_KEY;
  return token === secretValue ? <Outlet /> : <Navigate to="/" />;
}
