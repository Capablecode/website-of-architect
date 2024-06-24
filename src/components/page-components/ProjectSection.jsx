import React from "react";
import "./ProjectSection.css";
import projectImage from "../../assets/project-image.png";

const ProjectSection = () => {
  return (
    <div className="project-section">
      <div className="project-content">
        <h1 className="project-title">PROJECT</h1>
        <h2 className="project-subtitle">Lorum</h2>
        <div className="project-navigation">
          <button className="nav-button">←</button>
          <button className="nav-button">→</button>
        </div>
        <div className="project-counter">
          <span>01</span>
          <span className="splash">/</span>
          <span>02</span>
        </div>
      </div>
      <div className="project-image-container">
        <img src={projectImage} alt="Project" className="project-image" />
        <button className="view-project-button">VIEW PROJECT →</button>
      </div>
    </div>
  );
};

export default ProjectSection;
