import React from 'react';
import Navbar from './Navbar';

function Layout({ children, darkMode, toggleDarkMode }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
