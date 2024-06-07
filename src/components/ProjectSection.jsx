import React from "react";
import "./ProjectSection.css";
import projectImage from "./assets/project-image.png"; // Make sure to place the image in the correct directory

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="project-info">
        <h2>PROJECT</h2>
        <h1>Lorum</h1>
        <div className="navigation">
          <button className="nav-button">←</button>
          <button className="nav-button">→</button>
        </div>
        <div className="project-index">
          <span>01</span> / <span>02</span>
        </div>
        <a href="#" className="view-project">
          VIEW PROJECT →
        </a>
      </div>
      <div className="project-image">
        <img src={projectImage} alt="Project" />
      </div>
    </section>
  );
};

export default ProjectSection;
