import React from "react";

const Header = () => {
    return (
      <header className="bg-">
        <ul className="flex ">
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

