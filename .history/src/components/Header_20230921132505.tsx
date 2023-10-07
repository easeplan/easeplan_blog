import React from "react";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="flex justify-between m">
      <div className="logo-wrapper">
        <img src="./" alt="" />
        <p className="logo-text">easeplan</p>
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
