import React from "react";
import './main.css'
import person from '../../assets/images/person.jpg'

const MainCard = ()=>{
  return (
    <div className="main-container" id="main">
        <img src={person} alt="" />
        <div className="text-container">
          <h1>Chris Wang</h1>
          <p>Full Stack Software Engineer, seeking for full time full stack Software Engineer</p>
          <div className="main-row">
            <a href="https://docs.google.com/document/d/1Jt1dHGp6Ln3IiQtwXxXr9qVHrb2kZIHqNCPB71O99sM/edit" target="/blank">Resume</a>
            <a href="mailto:name@Alexwang@gmail.com" target="/blank">Email</a>
          </div>
        </div>
    </div>
  )
}

export default MainCard