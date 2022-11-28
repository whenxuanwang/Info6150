import React from "react";
import './style.css'
import data from '../../config'
import SkillItem from "../skill";
import Experience from "../experience";

export const About = ()=>{
  const { home, about } = data

  return (
    <div className="about">
      <div className="about-bg">
        <div className="about-bg-content">
          <div className="about-bg-title">
            <h3>{home.title}</h3>
            <p><b>{home.desc}</b></p>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-info">
          <img src={about.avatar} alt="person" />
          <h2>{about.name}</h2>
          <h4>{about.title}</h4>
          <h4>{about.titleSub}</h4>
          <h3><b>{about.description} </b></h3>
          <p><b>{about.descriptionSub}</b></p>
        </div>
        <div className="about-skill">
          <h3>My Skills</h3>
          <div className="about-skil-list">
            {about.skills.map(e => <SkillItem data={e} />)}
          </div>
        </div>
        <div className="about-otherSkill">
          <h3>Other Skills</h3>
          <div className="about-otherSkill-list">
            {about.otherSkills.map(e => <span>{e}</span>)}
          </div>
        </div>
        <div>
        
        </div>
        <div className="about-experience">
          <h3>My Experience</h3>
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default About
