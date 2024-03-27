import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div>
      <div className="about">
        <div className="left">
          <h1>WHO AM I?</h1>
          <p>
            My name is<strong> Raphael Kipchirchir</strong>, and I'm an
            enthusiastic and results-oriented software engineer from Eldoret,
            Kenya. Driven by a passionate ambition to solve the puzzles around
            software engineering, I started a career in computer science at Meru
            University of Science and Technology, where I graduated with
            <strong> First Class Honors</strong>. In addition to broadening my
            knowledge, this academic endeavor helped me perfom well in my class
            and rank third among the best students in the School of Computing
            and Informatics...{" "}
            <Link to="/tildai">
              <span style={{ color: "blue" }}>Read More</span>
            </Link>
          </p>

          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img
                src="https://source.unsplash.com/1600x1600/?React"
                alt="AboutImg"
                className="img"
              />
            </div>
            <div className="img-stack bottom">
              <img
                src="https://source.unsplash.com/1600x1600/?JavaScript"
                alt="AboutImg"
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="resume-btn">
        <Link to="/resume">
          <button className="btn btn-light">My Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
