import React from "react";
import "./css/About.css";
import { Heading } from "./styled/Heading.styled";

const About = () => {
  return (
    <div id="about" className="about-container wrapper">
      <Heading left="3.2em" className="heading">
        <h1>about.</h1>
        <h2>about.</h2>
      </Heading>
      
      <div className="info">
        <div className="info-one">
          <p>
            <span className="beer">Cheers !</span> Thanks for landing here. I'm
            a self-taught web-developer. I can develop responsive websites from
            scratch and raise them into modern creative user-friendly web
            experiences. I also do a little content writing. I'm currently,
            Learning app development.
          </p>
        </div>
        <div className="info-two">
          <p>
            I’ve been obsessed with tech and digging deeper into what interests
            me. Currently, working at a tech company in Chennai, India; graduated two
            years ago &amp; I love <span className="anime">Anime.</span>
          </p>
          <p>~ Flow is not always necessary.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
