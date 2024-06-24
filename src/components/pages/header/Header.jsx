import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/header_logo.png";
import "./Header.css"; // Ensure this path is correct

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={closeMenu}>
            <Link to="/">MAIN</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/project">PROJECTS</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/certification">CERTIFICATION</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contacts">CONTACTS</Link>
          </li>
        </ul>
        <div className="burger" onClick={handleToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
