import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <ul className="footer-menu">
        <li className="footer-button">
          <Link to="/" className="footer-link">
            Home
          </Link>
        </li>
        <li className="footer-button">
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
        </li>
        <li className="footer-button">
          <Link to="/about" className="footer-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
