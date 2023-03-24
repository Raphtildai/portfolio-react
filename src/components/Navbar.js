import "./NavbarStyle.css";

import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/images/logo.png";
const Navbar = () => {

    // Function to display menu items when hamburger menu icon is clicked
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // changing navbar color
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else {
            setColor(false);
        }
    }
    // adding eventlistener for scroll
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/portfolio-react">
            <img className="logo" src={ Logo } alt="Logo"></img>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/portfolio-react">Home</Link>
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
            {click ? (<FaTimes size={20} style={{color: "white"}} />) : (<FaBars size={20} style={{color: "white"}} />)}
        </div>
    </div>
  )
}

export default Navbar;