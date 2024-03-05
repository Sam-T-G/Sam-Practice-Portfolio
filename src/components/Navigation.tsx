import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="navigation-container">
      <ul className="navigation-menu">
        <li className="navigation-button">
          <Link to="/home">Home</Link>
        </li>
        <li className="navigation-button">
          <Link to="/home">Home</Link>
        </li>
        <li className="navigation-button">
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
