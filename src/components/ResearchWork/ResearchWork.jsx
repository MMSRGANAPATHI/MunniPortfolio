import React from "react";
import { useInView } from "react-intersection-observer";
import "./ResearchWork.css";
import OIP from "./OIP.jpeg";

const ResearchWork = () => {
  const { ref: refWork, inView: inViewWork } = useInView();

  return (
    <div>
      <div className="rtitle">
        <h2>Research Work</h2>
      </div>
      <div className={`work ${inViewWork ? "animate" : ""}`} ref={refWork}>
        <div className="image">
          <img
            src={OIP}
            alt="image"
            style={{ width: "60vh", height: "55vh" }}
          />
        </div>
        <div className="rcontent">
          <p className="ptagr">
            A Research Paper named
            <span className="fancy" style={{ textAlign: "center" }}>
              Optimizing crop health: By Evaluating CNN Performance on Plant
              Disease Detection
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchWork;
