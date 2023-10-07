import React from "react";
import "../styles/global.css";

const Header = () => {
  return (

<nav N="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div N="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" N="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" N="h-8 mr-3" alt="Flowbite Logo" />
        <span N="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-multi-level" type="button" N="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span N="sr-only">Open main menu</span>
        <svg N="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div N="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul N="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" N="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" N="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg N="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" N="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul N="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" N="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" N="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg N="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                    <div id="doubleDropdown" N="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul N="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" N="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" N="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" N="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" N="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" N="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div N="py-1">
                  <a href="#" N="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        <li>
          <a href="#" N="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" N="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" N="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    // <header className="flex justify-between m">
    //   <div className="logo-wrapper text-center flex items-center">
    //     <img src="../../public/images/easeplanlogo.png" alt="" />
    //     <p className="logo-text text-base">easeplan <span className="text-sm font-thin">blog</span></p>
    //   </div>
    //   <ul className="flex space-x-4 items-center justify-center">
    //     <li>
    //       <a href="/">News</a>
    //     </li>
    //     <li>
    //       <a href="/about">Events Planners</a>
    //     </li>
    //     <li>
    //       <a href="/contact">Service Providers</a>
    //     </li>
    //   </ul>
    // </header>
  );
};

export default Header;
