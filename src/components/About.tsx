import React from "react";
import "./About.css";

interface AboutProps {
  aboutHeader: string;
}

const About: React.FC<AboutProps> = ({ aboutHeader }) => {
  return (
    <div className="about-container">
      {aboutHeader && <h1 className="about-header">{aboutHeader}</h1>}
      <div className="about-content">
        <img
          className="about-portrait"
          src="/src/assets/self-portrait.jpg"
          alt="about portrait placeholder"
        />
      </div>
    </div>
  );
};

export default About;
