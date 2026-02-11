// Layout component defining the main application layout
import React from 'react';
import { Navbar, Footer } from './';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;