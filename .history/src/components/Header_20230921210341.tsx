import React from "react";
import "../styles/global.css";

--
const showMenu = 
--

const Header = () => {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="logo-wrapper flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="../../public/images/easeplanlogo.png" alt="" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
      <span className="ml-3 text-xl">easeplan <span className="text-sm font-thin">blog</span></span>
    </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-900">News</a>
      <a href="/about" className="mr-5 hover:text-gray-900">Events Planners</a>
      <a href="/contact" className="mr-5 hover:text-gray-900">Service Providers</a>
    </nav>
    <button 
      className="md:hidden inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      //on:click={() => setShowMenu(!showMenu)}
    >
      Menu
    </button>
    {showMenu && (
      <div className="block md:hidden">
        <a href="/" className="block mt-4 hover:text-gray-700 md:inline-block md:mt-0">News</a>
        <a href="/about" className="block mt-4 hover:text-gray-700 md:inline-block md:mt-0">Events Planners</a>
        <a href="/contact" className="block mt-4 hover:text-gray-700 md:inline-block md:mt-0">Service Providers</a>
      </div>
    )}
  </header>
  
  );
};

export default Header;
