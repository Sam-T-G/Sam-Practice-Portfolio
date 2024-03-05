import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <ul className="footer-menu">
        <li className="footer-button">
          <Link to="/home">Home</Link>
        </li>
        <li className="footer-button">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navigation-button">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
