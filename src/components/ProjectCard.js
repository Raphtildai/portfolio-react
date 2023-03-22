import "./ProjectCardStyle.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="ProjectImg"></img>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text }</p>
            <div className="project-btns">
                <NavLink to="/SingleProject" className="btn">Read More</NavLink>
                <NavLink to={props.view} className="btn btn-light" >View</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;