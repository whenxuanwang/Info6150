import React from "react";
import './style.css'

export const TopHeader = ()=>{

  const handleScroll = (anchor_id)=>{
    let body = document.getElementsByTagName('body')
    let anchor = document.getElementById(anchor_id)
    console.log(anchor.offsetHeight);
    window.scrollTo({top: anchor.offsetTop, behavior: 'smooth'})
  }

  return (
    <div className="header-container">
      <h2 onClick={()=>handleScroll("main")} style={{cursor:'pointer'}}>Chris Wang</h2>
      <div className="header-list">
        <div className="header-list-item" onClick={()=>handleScroll("about")}>about me</div>
        <div className="header-list-item" onClick={()=>handleScroll("card")}>Experience</div>
        <div className="header-list-item" onClick={()=>handleScroll("footer")}>Concat</div>
      </div>
    </div>
  )
}