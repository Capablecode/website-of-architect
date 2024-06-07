import React from "react";
import { Link } from "react-router-dom";
import ProjectSection from "../../ProjectSection";
const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div class="logo">BRYAN PALACE</div>
        <ul className="nav-links">
          <li>
            <Link to="/">MAIN</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/project">PROJECTS</Link>
          </li>
          <li>
            <Link to="/certification">CERTIFICATION</Link>
          </li>
          <li>
            <Link to="/contacts">CONTACTS</Link>
          </li>
        </ul>
        <div class="burger" onClick={toggleNav}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>

      <ProjectSection />
    </div>
  );
};

export default Home;
