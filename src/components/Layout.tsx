import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer'; if rendered here

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* CRITICAL: This renders the current matched route */}
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;