import "./NavbarStyle.css";

import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {

    // Function to display menu items when hamburger menu icon is clicked
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/certifications">Certifications</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {/* Listen to click events when the user clicks the hamburger menu icon */}
            {click ? (<FaBars size={20} style={{color: "#fff"}} />) : (<FaTimes size={20} style={{color: "#fff"}} />)}
        </div>
    </div>
  )
}

export default Navbar;