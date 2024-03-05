import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-menu">
        <li className="navbar-button">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-button">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
        <li className="navbar-button">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
