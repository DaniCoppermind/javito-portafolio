import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/portfolio" element={<h1>portfolio</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />

          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/add-video" element={<h1>New Video</h1>} />
          <Route path="/dashboard/:id" element={<h1>update video</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
