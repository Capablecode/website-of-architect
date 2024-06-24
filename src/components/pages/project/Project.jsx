import React from "react";
import Header from "../header/Header";
// import FooterSection from "../../page-components/FooterSection";
import ProjectImage from "../../../assets/project-image-1.png";
import ProjectImage2 from "../../../assets/project-image-2.png";
import ProjectImage3 from "../../../assets/project-image-3.png";
import HorizontalRule from "../../../assets/horizontalrule.png";
import Divider from "../../../assets/divider.png";
import "./Project.css";
import FooterSection from "../../page-components/FooterSection";

const Project = () => {
  return (
    <div className="project-container">
      <Header />
      <div>
        <div className="info">
          <div className="info-1">Our</div>
          <div className="info-2">Projects</div>

          <img
            src={HorizontalRule}
            alt="horizaontal line"
            className="horizon-rule"
          />
        </div>

        <div className="main">
          <div className="img-container">
            <img
              src={ProjectImage}
              alt="Project image"
              className="project-image"
            />
          </div>

          <div className="description">
            <div className="heading">Sample Project</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="btn">
              <button className="view-more-btn">View More &rarr;</button>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="img-container">
            <img
              src={ProjectImage2}
              alt="Project image"
              className="project-image"
            />
          </div>

          <div className="description">
            <div className="heading">Sample Project</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="btn">
              <button className="view-more-btn">View More &rarr;</button>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="img-container">
            <img
              src={ProjectImage3}
              alt="Project image"
              className="project-image"
            />
          </div>

          <div className="description">
            <div className="heading">Sample Project</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="btn">
              <button className="view-more-btn">View More &rarr;</button>
            </div>
          </div>
        </div>
        <div className="pagination">
          <span className="flex">
            <span>0</span>
            <span>1</span>
          </span>
          <span className="divider">
            <img src={Divider} />
          </span>
          <span className="color-gray">05</span>
          <div className="btn">
            <button className="prev-btn">&larr;</button>
            <button className="next-btn">&rarr;</button>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default Project;
