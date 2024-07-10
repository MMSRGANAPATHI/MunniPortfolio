// App.js
import React from "react";
import Name from "./components/Name/Name";
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
        <div className="projects">hii</div>
      </div>
      <div className="slide">
        <div className="projects">Slide 3 content</div>
      </div>
      <div className="slide">
        <div className="projects">Slide 4 content</div>
      </div>
      <div className="slide">
        <div className="projects">Slide 5 content</div>
      </div>
    </div>
  );
};

export default App;
