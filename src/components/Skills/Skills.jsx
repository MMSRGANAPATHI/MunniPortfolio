import React, { useEffect, useRef } from "react";
import "./Skills.css";
import Html from "./Html.png";
import Css from "./css.png";
import Js from "./javascript.jpeg";
import R from "./react.png";
import Mongo from "./Mongo.png";
import Java from "./java.png";
import Node from "./Node.jpeg";
import Git from "./Git.jpeg";
import SQL from "./SQL.png";
import Python from "./Python.png";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flip");
          } else {
            entry.target.classList.remove("flip");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current.querySelectorAll(".g1");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="stitle">
        <h2>Skills</h2>
      </div>
      <div className="sblock" ref={skillsRef}>
        <div className="g1">
          <img src={Html} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Css} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Js} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={R} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Node} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Mongo} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Git} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={SQL} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Java} alt="" className="skill-img" />
        </div>
        <div className="g1">
          <img src={Python} alt="" className="skill-img" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
