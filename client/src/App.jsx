import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@context/AuthContext';
import { VideoProvider } from '@context/VideoContext';
import Navbar from '@components/navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </VideoProvider>
    </AuthProvider>
  );
}

export default App;
