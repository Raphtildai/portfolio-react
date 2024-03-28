import "./FooterStyle.css";
import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Eldoret, Uasin Gishu,</p>
                        <p>Kenya.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} /><NavLink to="tel:+254725341547">+254 725 341 547</NavLink></h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} /><NavLink to="mailto:raphael@tildaitech.co.ke">raphael@tildaitech.co.ke</NavLink></h4>                    
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Dedicated and enthusiastic software engineer with four years of front end and back end programming expertise for both web and mobile applications.</p>
                <div className="socials">
                    <NavLink to="https://www.facebook.com/profile.php?id=100084354161664" target={"_blank"}><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} /></NavLink>
                    <NavLink to="https://twitter.com/Tildai10" target={"_blank"}><FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} /></NavLink>
                    <NavLink to="https://www.linkedin.com/in/raphael-tildai-83b410190/" target={"_blank"}><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></NavLink>
                    <NavLink to="https://github.com/Raphtildai" target={"_blank"}><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} /></NavLink>

                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&#169; All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;