import React from "react";
import { useInView } from "react-intersection-observer";
import "./Education.css";

const Education = () => {
  const { ref: refBtech, inView: inViewBtech } = useInView({});
  const { ref: refInter, inView: inViewInter } = useInView({});
  const { ref: refSecondary, inView: inViewSecondary } = useInView({});

  return (
    <div>
      <div className="eduTitle">
        <h2>Education</h2>
      </div>
      <div className="eduBlock">
        <div className={`Btech ${inViewBtech ? "animate" : ""}`} ref={refBtech}>
          <p className="para">Vishnu Institute Of Technology, Bhimavaram</p>
          <p className="para">B.Tech, Computer Science Engineering</p>
        </div>
        <div className={`Inter ${inViewInter ? "animate" : ""}`} ref={refInter}>
          <p className="para">MPS Junior College, Mandapeta</p>
          <p className="para">Intermediate Education, MPC</p>
        </div>
        <div
          className={`secondary ${inViewSecondary ? "animate" : ""}`}
          ref={refSecondary}
        >
          <p className="para">Sri Annpaurna High School, Mandapeta</p>
          <p className="para">Secondary Education, SSC</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
