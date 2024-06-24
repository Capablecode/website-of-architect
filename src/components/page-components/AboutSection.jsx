import React from "react";
import "./AboutSection.css";
import AboutImageOne from "../../assets/about-image-1.png";
import AboutImageTwo from "../../assets/about-image-2.png";
import AboutImageThree from "../../assets/about-image-3.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="images">
        <div className="first-image">
          <img src={AboutImageOne} alt="Image 1" className="one" />
          <img src={AboutImageTwo} alt="Image 2" className="two" />
        </div>
        <img src={AboutImageThree} alt="Image 3" className="three" />
      </div>
      <div className="text">
        <h2>About</h2>
        <p className="text__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <div className="read-more">Read More →</div>
      </div>
    </div>
  );
};

export default AboutSection;
