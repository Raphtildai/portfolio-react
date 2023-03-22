import "./AboutContentStyle.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>Well, my name is <strong>Raphael Tildai</strong>. I am a simple man with a big heart. I'm glad you're looking through my portfolio, which represents everything I've learned and accomplished as a Computer Science student.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://source.unsplash.com/1600x1600/?React" alt="AboutImg" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src="https://source.unsplash.com/1600x1600/?JavaScript" alt="AboutImg" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;