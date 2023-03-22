import "./ProjectCardStyle.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectsCardData";

import React from 'react'

const Project = () => {
  return (
    <div className="projects-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                ProjectCardData.map((val, index) => {
                    return (
                        <ProjectCard 
                            key = { index }
                            imgsrc = { val.imgsrc }
                            title = { val.title }
                            text = { val.text }
                            view = { val.view }
                        />
                    );
                })
            }
        </div>
    </div>
  )
}

export default Project;