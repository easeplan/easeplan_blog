import React from "react";

const Header = () => {
    return (
      <header>
        <ul className="flex">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About Me</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
        </ul>
      </header>
    )
}

export default Header;

