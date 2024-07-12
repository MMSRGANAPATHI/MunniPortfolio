import React from "react";
import { useInView } from "react-intersection-observer";
import "./Project.css";
import crop from "./crop.jpeg";
import LMS from "./lms.png";
import Weather from "./weather.jpg";

const Projects = () => {
  const { ref: ref1, inView: inView1 } = useInView({});
  const { ref: ref2, inView: inView2 } = useInView({});
  const { ref: ref3, inView: inView3 } = useInView({});

  return (
    <div>
      <div className="head">
        <h2>Projects</h2>
      </div>
      <div className="glass-container">
        <div className={`glass1 ${inView1 ? "animate" : ""}`} ref={ref1}>
          <img
            src={Weather}
            alt="weather"
            style={{ width: "45vh", height: "35vh", borderRadius: "10%" }}
          />
          <div className="pc" style={{ textAlign: "center" }}>
            <h3>Weather forecast App using React</h3>
          </div>
        </div>
        <div
          className={`glass2 ${inView2 ? "animate" : ""}`}
          ref={ref2}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img
            src={LMS}
            alt="lms"
            style={{ width: "45vh", height: "35vh", borderRadius: "10%" }}
          />
          <div className="pc" style={{ textAlign: "center" }}>
            <h3>College management Portal using React</h3>
          </div>
        </div>
        <div className={`glass3 ${inView3 ? "animate" : ""}`} ref={ref3}>
          <img
            src={crop}
            alt="farmer friend"
            style={{ width: "45vh", height: "35vh", borderRadius: "10%" }}
          />
          <div className="pc" style={{ textAlign: "center" }}>
            <h3>Farmer Friend</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
