import "./ProjectCardStyle.css";

import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  }
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="ProjectImg"></img>
        <h2 className="project-title">
          {showContent ? props.title : (props.title.length > 25 ? props.title.slice(0, 25) + " ..." : props.title)}
        </h2>
        <div className="project-details">
            <p>{showContent ? props.text : (props.text.length > 100 ? props.text.slice(0, 100) + " ..." : props.text) }</p>
            <div className="project-btns">
                <button onClick={toggleContent} className="btn">{showContent ? 'Show Less' : 'Read More' }</button>
                <NavLink to={props.view} className="btn btn-light" >View</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;