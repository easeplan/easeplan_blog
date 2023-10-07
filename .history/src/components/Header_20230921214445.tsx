import React from "react";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 md:p-8 bg-white dark:bg-gray-800 shadow-md">
    <div className="logo-wrapper flex items-center space-x-2">
      <img src="../../public/images/easeplanlogo.png" alt="easeplan logo" className="w-12 h-12 md:w-16 md:h-16 object-cover" />
      <div className="text-left">
        <p className="logo-text text-lg md:text-xl font-bold leading-tight mb-0.5">easeplan</p>
        <span className="text-xs md:text-sm font-thin">blog</span>
      </div>
    </div>
  
    <nav className="hidden md:flex space-x-4 items-center justify-center">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">News</a>
        </li>
        <li>
          <a href="/about" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Events Planners</a>
        </li>
        <li>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Service Providers</a>
        </li>
      </ul>
    </nav>
  
    <button className="md:hidden focus:outline-none" aria-label="Menu">
      <svg className="h-6 w-6 fill-current text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
      </svg>
    </button>
  </header>
  
  );
};

export default Header;
