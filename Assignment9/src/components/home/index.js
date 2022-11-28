import React from "react";
import './style.css'
import data from '../../config.js'

export const Home = ()=>{
  const { home } = data
  const handleRoute = () => {
    window.location.pathname = '/about'
  }

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-title">
          <h3>{home.title}</h3>
          <p><b>{home.desc}</b></p>
        </div>
        <span className="home-btn" onClick={() => handleRoute()}>Start</span>
      </div>
    </div>
  )
}

export default Home
