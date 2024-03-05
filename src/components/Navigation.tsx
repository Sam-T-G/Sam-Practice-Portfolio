import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="navigation-container">
      <ul className="navigation-menu">
        <li className="navigation-button">
          <Link to="/home" className="navigation-link">
            Home
          </Link>
        </li>
        <li className="navigation-button">
          <Link to="/projects" className="navigation-link">
            Projects
          </Link>
        </li>
        <li className="navigation-button">
          <Link to="/about" className="navigation-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
