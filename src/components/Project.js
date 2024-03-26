import "./ProjectCardStyle.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectsCardData";

import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
          <div className="projects-container">
              <h1 className="project-heading">{this.props.title}</h1>
              <div className="project-container">
                  {
                      ProjectCardData.slice(0, this.props.range).map((val, index) => {
                          return (
                              <ProjectCard 
                                  key = { index }
                                  date = { val.date}
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
}

export default Project;