import React from "react";
import "./css/Project.css";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <div className="project-image">
        <img
          src={"/images/project " + project.id + ".png"}
          alt={"Project " + project.id}
        />
      </div>
      <div className="project-info">
        <div>
          <p>{project.tech}</p>
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
        </div>
        <div className="project-links">
          <a rel="noreferrer" target={"_blank"} href={project.git}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a rel="noreferrer" target={"_blank"} href={project.live}>
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
