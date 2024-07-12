import React, { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.1,
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div ref={contactRef} className="contact-container">
      <div className="title">
        <h2>Contact</h2>
      </div>
      <div className="form">
        <input type="text" name="name" id="name" placeholder="name" />
        <br />
        <input type="email" name="email" id="email" placeholder="email" />
        <br />
        <input type="text" name="message" id="message" placeholder="message" />
        <br />
        <input type="submit" value="submit" id="submit" />
      </div>
    </div>
  );
};

export default Contact;
