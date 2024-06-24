import React from "react";
import Header from "../header/Header";
import "../header/Header.css";
import ProjectSection from "../../page-components/ProjectSection";
import AboutSection from "../../page-components/AboutSection";
import FocusSection from "../../page-components/FocusSection";
import ContactUsSection from "../../page-components/ContactUsSection";
import FooterSection from "../../page-components/FooterSection";
import OurProjectSection from "../../page-components/OurProjectSection";
const Home = () => {
  return (
    <div>
      <Header />
      <ProjectSection />
      <AboutSection />
      <FocusSection />
      <OurProjectSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default Home;
