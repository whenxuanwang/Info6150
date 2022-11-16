import React from "react";
import './about.css'
import java from '../../assets/tupian/skill/java.png'
import c from '../../assets/tupian/skill/c.png'
import html from '../../assets/tupian/skill/html.png'
import mysql from '../../assets/tupian/skill/mysql.png'
import mongodb from '../../assets/tupian/skill/mongodb.png'
import python from '../../assets/tupian/skill/python.png'

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <p>Hello, this is Chris Wang, I am a Master of Science in Information Systems student at Northeastern University Silicon Valley Campus since Sep 2022. </p>
      <p> I am looking for 2023 Summer software engineering internship opportunities now! </p>
      <p>Feel free to Reach out me.</p>
      <div className="img-list">
        <img src={java} alt="java" />
        <img src={c} alt="c++" />
        <img src={html} alt="html" />
        <img src={mysql} alt="mysql" />
        <img src={mongodb} alt="mongdb" />
        <img src={python} alt="python" />
      </div>
    </div>
  )
};

export default AboutMe