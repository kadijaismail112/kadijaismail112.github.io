import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import BlogEditor from './pages/admin/BlogEditor';
import BlogList from './pages/admin/BlogList';
import Login from './pages/admin/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useConfig } from './hooks/useConfig';
import { useAuthStore } from './stores/authStore';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorMessage from './components/common/ErrorMessage';

function App() {
  const { config, loading, error } = useConfig();
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!config) return null;

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home config={config} />} />
          <Route path="projects" element={<Projects projects={config.projects} />} />
          <Route path="blog" element={<Blog posts={config.blog} />} />
          <Route path="blog/:id" element={<BlogPost posts={config.blog} />} />
          <Route path="contact" element={<Contact personal={config.personal} />} />
          
          {/* Admin routes */}
          <Route path="admin/login" element={<Login />} />
          <Route
            path="admin/blog"
            element={
              <ProtectedRoute>
                <BlogList />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/blog/new"
            element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/blog/edit/:id"
            element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;