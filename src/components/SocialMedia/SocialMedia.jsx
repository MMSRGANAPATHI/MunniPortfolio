import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./SocialMedia.css";
const SocialMedia = () => {
  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/marnala-murali-sriram-ganapathi-3668a9250"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MMSRGANAPATHI"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub />
        </a>
        <a href="mailto:your-email@example.com" className="icon-link">
          <FaEnvelope />
        </a>
        <a href="tel:+1234567890" className="icon-link">
          <FaPhone />
        </a>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SocialMedia;
