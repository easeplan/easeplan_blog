import React from "react";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="flex justify-between m">
      <div className="logo-wrapper text-center flex items-center">
        <img src="../../public/images/easeplanlogo.png" alt="" />
        <h6pclassName="logo-text text-base">easeplan</h6pclassName=>
      </div>
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
