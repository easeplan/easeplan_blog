import React from "react";
import '../styles/global.css'

const Header = () => {
    return (
        <header className="flex justify-between">
        <ul className="flex space-x-4 flex">
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

