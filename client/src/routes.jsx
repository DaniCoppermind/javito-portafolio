import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Cookies from 'js-cookie';

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}

export function ProtectedLoginRoute() {
  const token = Cookies.get(import.meta.env.VITE_TOKEN_NAME);
  const secretValue = import.meta.env.VITE_SECRET_KEY;
  return token === secretValue ? <Outlet /> : <Navigate to="/" />;
}
