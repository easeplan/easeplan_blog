import React from "react";
import '../styles/global.css'

const Header = () => {
    return (
      <header>
        <ul>
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
    )
}

export default Header;

