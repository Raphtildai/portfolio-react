import "./SkillsCardStyle.css";
import React from 'react';
import SkillsCardData from "./SkillsCardData";

const Skills = () => {
  return (
    <div className="skills">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-container">
            {
                SkillsCardData.map((val, index) => {
                    // Get the key of the current object in the array
                    const key = Object.keys(val)[0];
                    // Get the array of skills for the current object
                    const skills = val[key];
                    return (
                        <div className="skills-card" key={index}>
                            <div className="skill">
                                <h1 className="skills-title">{key} Skills</h1>
                                <ul>
                                    {
                                        skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Skills;
