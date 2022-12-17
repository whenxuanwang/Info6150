
import React, { useEffect, useState } from "react";
import './style.css';

export const Header = (props)=>{
  const [classes, setClasses] = useState('header');

  const handleChange = (e)=>{
    window.location.pathname = e
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleScroll = (e) => {
    let scrollTop = document.documentElement.scrollTop
    if (scrollTop > 80) {
      setClasses('header header-top')
    } else {
      setClasses('header')
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll, true)
      return window.removeEventListener('scroll', handleScroll, false)
    }
  }, [])

  return (
    <div className={classes}>
      <h2 className="header-logo" onClick={()=> handleChange("/")}>Chris Wang</h2>
      <div className="header-list">
        <div className="header-list-item" onClick={()=> handleChange("/")}>Home</div>
        <div className="header-list-item" onClick={()=> handleChange("/about")}>About Me</div>
      </div>
    </div>
  )
}

export default Header;
