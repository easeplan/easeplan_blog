import React from "react";

const Header = () => {
    return (
      <header>
        <ul className="flex ">
            <li>
                <a href="/">News</a>
            </li>
            <li>
                <a href="/about">Events Planners</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
        </ul>
      </header>
    )
}

export default Header;

