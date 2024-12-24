import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from '../Footer';
import { HelmetProvider } from 'react-helmet-async';

const Layout = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;