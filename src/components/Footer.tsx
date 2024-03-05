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
          <Link to="/home">Projects</Link>
        </li>
        <li className="navigation-button">
          <Link to="/footer">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
