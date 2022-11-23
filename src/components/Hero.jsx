import React from "react";
import "./css/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container wrapper">
      <div className="info">
        <p>Hello, I’m Shyam,</p>
        <h1>Web Developer</h1>
        <p>based in India.</p>
        <a href="images/profile.png">
          <button>Resume</button>
        </a>
      </div>
      <div className="image">
        <img src="images/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
