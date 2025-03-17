import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/github.svg"; 
import linkedinIcon from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-center">
          <p>&copy; 2025 Elio Fezollari. All Rights Reserved.</p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/ElioFezollari" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/elio-fezollari-46a041289/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
