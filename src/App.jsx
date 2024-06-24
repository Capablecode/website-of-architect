import { useState } from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import PhotoGallery from "./components/pages/gallery/PhotoGallery";
import Project from "./components/pages/project/Project";
import Certification from "./components/pages/certification/Certification";
import Contacts from "./components/pages/contacts/Contacts";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/gallery" Component={PhotoGallery} />
        <Route path="/project" Component={Project} />
        <Route path="/certification" Component={Certification} />
        <Route path="/contacts" Component={Contacts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
