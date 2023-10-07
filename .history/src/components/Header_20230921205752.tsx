import React from "react";
import "../styles/global.css";

const Header = ({showHeaderInput}: string) => {
  return (
    <header className="flex justify-between m">
      <div className="logo-wrapper text-center flex items-center">
        <img src="../../public/images/easeplanlogo.png" alt="" />
        <p className="logo-text text-base">easeplan <span className="text-sm font-thin">blog</span></p>
      </div>

      {showHeaderInput && (
    <div className="relative animate__animated animate__fadeIn">
      <input
        type="text"
        placeholder="Search for posts..."
        className="w-full px-4 py-2 rounded-md border-2 border-transparent focus:outline-none focus:border-primary transition-all duration-500"
        onFocus={(e) => e.target.classList.add('bg-white', 'shadow-md')}
        onBlur={(e) => e.target.classList.remove('bg-white', 'shadow-md')}
      />
      <span class="absolute right-2 top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </span>
    </div>
  )}
      <ul className="flex space-x-4 items-center justify-center">
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/about">Events Planners</a>
        </li>
        <li>
          <a href="/contact">Service Providers</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
