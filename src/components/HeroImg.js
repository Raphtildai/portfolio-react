import "./HeroImgStyle.css";

import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src="https://source.unsplash.com/1600x1600/?programming" alt="HeroImage"></img>
        </div>
        <div className="content">
          <p>Hi, I'm Raphael Tildai</p>
          <h1>Software Developer</h1>
          <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  );
}

export default HeroImg;