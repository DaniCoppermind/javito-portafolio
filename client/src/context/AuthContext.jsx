import { createContext, useState, useContext, useEffect } from 'react';
import { loginRequest } from '../api/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signin = async user => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error) {
      setErrors(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, errors, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
