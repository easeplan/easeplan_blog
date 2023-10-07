import React from "react";
import "../styles/global.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between">
    <

      <nav className="hidden sm:flex space-x-4 items-center justify-center">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Events Planners
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Service Providers
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="sm:hidden ml-auto focus:outline-none"
        aria-label="Menu"
      >
        <svg
          className="h-6 w-6 fill-current text-gray-700 dark:text-gray-300 ml-28 xs:mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
