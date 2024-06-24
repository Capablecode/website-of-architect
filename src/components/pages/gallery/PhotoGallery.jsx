// import Home from "../../components/pages/home/Home";
import React from "react";
import "./PhotoGallery.css";
import Header from "../header/Header";
import FooterSection from "../../page-components/FooterSection";

import url1 from "../../../assets/photos/url1.png";
import url2 from "../../../assets/photos/url2.png";
import url3 from "../../../assets/photos/url3.png";
import url4 from "../../../assets/photos/url4.png";
import url5 from "../../../assets/photos/url5.png";
import url6 from "../../../assets/photos/url6.png";
import url7 from "../../../assets/photos/url7.png";
import url8 from "../../../assets/photos/url8.png";
import url9 from "../../../assets/photos/url9.png";
import url10 from "../../../assets/photos/url10.png";
import Divider from "../../../assets/divider.png";

const photos = [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10];

const PhotoGallery = () => {
  return (
    <div className="gallery-container">
      <Header />
      <h1 className="title">
        <span>Photo</span>
        <div className="gallery-text">Gallery</div>
      </h1>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div className="gallery-item" key={index}>
            <img src={photo} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
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
        <button className="prev-btn">&larr;</button>
        <button className="next-btn">&rarr;</button>
      </div>
      <FooterSection />
    </div>
  );
};

export default PhotoGallery;
