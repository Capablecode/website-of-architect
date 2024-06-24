import React from "react";
import "./FooterSection.css";
import FooterIogo from "../../assets/footer-logo.png";
import LocationVect from "../../assets/location.png";
import Msgvect from "../../assets/message.png";
import CallVect from "../../assets/call.png";
import FbIcon from "../../assets/facebook.png";
import LinkedIn from "../../assets/LinkedIn.png";
import XIcon from "../../assets/twitter.png";
import PIcon from "../../assets/pininterest.png";
import Line from "../../assets/Line.png";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterIogo} alt="Digital Project Logo" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li>Main</li>
              <li>Gallery</li>
              <li>Projects</li>
              <li>Certifications</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacts</h3>
            <div className="flex flex-1">
              <div>
                <img src={LocationVect} className="small-icon" />
              </div>

              <div className="footer-text">
                1234 Sample Street <br />
                Austin Texas 78704
              </div>
            </div>

            <div className="flex">
              <div>
                <img src={Msgvect} className="small-icon" />
              </div>
              <div className="footer-text down">512.333.2222</div>
            </div>

            <div className="flex">
              <div>
                <img src={CallVect} className="small-icon" />
              </div>
              <div className="footer-text">sampleemail@gmail.com</div>
            </div>
          </div>

          <div className="footer-column">
            <h3>Social Media</h3>
            <div className="social-media">
              <div>
                <img src={FbIcon} alt="" />
              </div>
              <div>
                <img src={XIcon} alt="" />
              </div>
              <div>
                <img src={LinkedIn} alt="" />
              </div>
              <div>
                <img src={PIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-container">
        <div className="footer-text">2021 All Rights Reserved</div>
        <img src={Line} alt="footer-horizontal rule" className="line" />
      </div>
    </footer>
  );
};

export default FooterSection;
