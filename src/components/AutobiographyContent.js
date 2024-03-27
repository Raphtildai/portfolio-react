import "./AutobiographyContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";

const AutobiographyContent = () => {
  return (
    <div className="autobiography">
      <p>
        My name is<strong> Raphael Kipchirchir</strong>, and I'm an enthusiastic
        and results-oriented software engineer from Eldoret, Kenya. Driven by a
        passionate ambition to solve the puzzles around software engineering, I
        started a career in computer science at Meru University of Science and
        Technology, where I graduated with<strong> First Class Honors</strong>.
        In addition to broadening my knowledge, this academic endeavor helped me
        perfom well in my class and rank third among the best students in the
        School of Computing and Informatics.
      </p>
      <p>
        I've always been fascinated by technology, and my journey has been
        filled with many worthwhile possibilities and enlightening encounters.
        My professional trajectory has been marked by innovation and significant
        contributions, from my time as a Young Tech Professional at Eldohub,
        where I spearheaded the implementation of additional features for the
        AppCereal mobile application, to my time as a Presidential Digitalent
        Intern at the ICT Authority, where I am currently spearheading the
        development of various systems for the University of Nairobi where I was
        deployed to.
      </p>
      <p>
        Beyond the conventional educational and professional settings, I have
        actively looked for ways to use my expertise to advance society. I took
        on the mantle of leadership with diligence and dedication as the
        <strong>
          {" "}
          Chairperson of the St. Teresa of Avila Catholic Chaplaincy
        </strong>{" "}
        at Meru University. I oversaw the union's operations and steadfastly
        defended its interests. Furthermore, I was able to leave a lasting
        imprint on the chaplaincy's digital infrastructure by creating an
        electronic voting system that streamlined the election process and has
        been used to elect the leaders of the chaplaincy five times to date.
      </p>
      <p>
        I have developed my skills in a variety of programming languages and
        frameworks within the field of software development, ranging from Python
        and JavaScript to React.js and Flutter. My expertise includes database
        management systems like PostgreSQL and MySQL, which are supported by my
        unwavering dedication to cybersecurity best practices and rigorous
        attention to detail.
      </p>
      <p>
        I have an unquenchable thirst for knowledge, so I'm devoted to lifelong
        learning and development, taking advantage of any chance to broaden my
        horizons and adopt cutting-edge technologies. Away from the workplace, I
        find comfort in strong relationships with friends and family, traveling,
        playing piano and watching movies. In addition, I have a strong
        enthusiasm for social welfare and community development, and I lend my
        time and knowledge to projects that try to promote positive change.
      </p>
      <p>
        My unwavering confidence that technology has the
        <strong> transformative potential</strong> to create a better, more
        inclusive future serves as my compass as I continue along the path of
        technological innovation. I aim to make a lasting impression with every
        project I take on by using my knowledge and expertise to provide
        solutions that are relevant to both people and communities.
      </p>
      <p>
        This autobiography summarizes my path to date and is proof of my
        steadfast devotion, unyielding pursuit of greatness, and unshakable
        commitment to using technology to change the world.
      </p>
      <p><strong>That, to put it simply, is Raphael.</strong></p>
      <div className="resume-btn">
        <Link to="/contact">
          <button className="btn btn-light">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default AutobiographyContent;
