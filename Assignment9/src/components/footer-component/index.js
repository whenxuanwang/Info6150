import React from "react";
import './footer.css'
import github from '../../assets/images/Github.png'
import email from '../../assets/images/Email.png'
import resume from '../../assets/images/Resume.png'
const FooterComponent = ()=>{
  return (
    <div className="footer-container" id="footer">
      <p>Concat With me</p>
      <div className="row">
        <a href="https://github.com/whenxuanwang" target="/blank"><img alt="mail" src={github} /></a>
        <a href="mailto:name@Alexwang@gmail.com"><img alt="" src={email} /></a>
        <a href="https://docs.google.com/document/d/1Jt1dHGp6Ln3IiQtwXxXr9qVHrb2kZIHqNCPB71O99sM/edit"><img alt="" src={resume} /></a>
      </div>
      <p>Chris Wang &copy; 2022</p>
    </div>
  )
}

export default FooterComponent