import React from "react";
import "./css/Work.css";
import Project from "./Project";
import { Heading } from "./styled/Heading.styled";

const Work = () => {
  const projects = [
    {
      id: "1",
      title: "FoodTuck",
    //   image_url: '/images/project 1.png',
      tech: "HTML/CSS/JS & React",
      desc: "A modern restraunt website built with react and styled components.",
      git: "https://github.com/sammy3110/modern-restaurant-web-app",
      live: "https://foodtuck.netlify.app/",
    },
    {
      id: "2",
      title: "Nike Store",
    //   image_url: '/images/project 1.png',
      tech: "HTML/CSS/JS & React",
      desc: "A modern ecommerce designed website. Built with ReactJS and styled components.",
      git: "https://github.com/sammy3110/react-ecommerce-app",
      live: "https://shyams-nike.netlify.app/",
    },
    {
      id: "3",
      title: "Music Player",
    //   image_url: '/images/project 1.png',
      tech: "HTML/CSS/JS & React",
      desc: "A music player website built with ReactJS.",
      git: "https://github.com/sammy3110/React-Music-App",
      live: "https://shyams-react-music-app.netlify.app/",
    },
    {
      id: "4",
      title: "Chat App",
    //   image_url: '/images/project 1.png',
      tech: "HTML/CSS/JS, React, Firebase ",
      desc: "A nicely designed chat web-application build using react and firebase.",
      git: "https://github.com/sammy3110/React-Chat-App",
      live: "https://shyams-react-chat-app.netlify.app/",
    },
  ];

  return (
    <div className="work-container wrapper">
      <Heading left="2.7em" className="heading">
        <h1>work.</h1>
        <h2>work.</h2>
      </Heading>
      <div className="project-list">
        {projects.map( project => <Project key={project.id} project={project} />)}
      </div>
    </div>
  );
};

export default Work;
