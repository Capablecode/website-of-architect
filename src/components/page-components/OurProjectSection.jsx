import React from "react";
import "./OurProjectSection.css";
import sampleProjectImage from "../../assets/Rectangle 12.png";
import projectImage1 from "../../assets/image 15.png";
import projectImage2 from "../../assets/image 17.png";
import projectImage3 from "../../assets/image 16.png";
import projectImage4 from "../../assets/image 18.png";

const OurProjectSection = () => {
  return (
    <div className="projects-section">
      <h2>Our Projects</h2>
      <div className="projects-grid">
        <div className="project large">
          <img src={sampleProjectImage} alt="Sample Project" />
          <div className="overlay">
            <h3>Sample Project</h3>
            <a href="#" className="view-more">
              View More →
            </a>
          </div>
        </div>
        <div className="project large">
          <img src={projectImage1} alt="Project 1" />
        </div>
        <div className="project small-3">
          <img src={projectImage3} alt="Project 3" />
        </div>
        <div className="project small-next">
          <img src={projectImage2} alt="Project 2" />
        </div>

        <div className="project small-nextt">
          <img src={projectImage4} alt="Project 4" />
        </div>
      </div>
      <a href="#" className="all-projects">
        All Projects →
      </a>
    </div>
  );
};

export default OurProjectSection;
