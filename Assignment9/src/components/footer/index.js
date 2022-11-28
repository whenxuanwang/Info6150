import React from "react"
import './style.css'
import github from '../../assets/images/Github.png'
import email from '../../assets/images/Email.png'
import resume from '../../assets/images/Resume.png'
import data from '../../config'

const Footer= ()=>{
  const { concat } = data
  return (
    <div className="footer">
      <p className="footer-title">Concat With me</p>
      <div className="footer-row">
        <a href={concat.github} target="_blank"><img alt="github" src={github} /></a>
        <a href={`mailto:${concat.email}`} target="_blank" ><img alt="mail" src={email} /></a>
        <a href={concat.resume} target="_blank"><img alt="" src={resume} /></a>
      </div>
      <p>Chris &copy; 2022</p>
    </div>
  )
}

export default Footer
