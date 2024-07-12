// App.js
import React from "react";
import Name from "./components/Name/Name";
import Projects from "./components/Projectsfolder/Projects";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import ResearchWork from "./components/ResearchWork/ResearchWork";
import Skills from "./components/Skills/Skills";
import "./App.css";

const App = () => {
  return (
    <div className="slides-container">
      <div className="slide">
        <div className="nameBlock">
          <Name />
        </div>
      </div>
      <div className="slide">
        <div className="projects">
          <Education />
        </div>
      </div>
      <div className="slide">
        <div className="projects">
          <Skills />
        </div>
      </div>
      <div className="slide">
        <div className="projects">
          <Projects />
        </div>
      </div>
      <div className="slide">
        <div className="projects">
          <ResearchWork />
        </div>
      </div>
      <div className="slide">
        <div className="projects">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
