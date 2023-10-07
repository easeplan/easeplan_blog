import React from "react";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="flex justify-between m">
      <div className="logo">
        <a href="/">Logo</a>
      </div>
      <ul className="flex space-x-4 items-center pl-">
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
