import React from "react";
import "./About.css";

interface AboutProps {
  aboutHeader: string;
}

const About: React.FC<AboutProps> = ({ aboutHeader }) => {
  return (
    <div className="about-container">
      {aboutHeader && <h1 className="about-header">{aboutHeader}</h1>}
    </div>
  );
};

export default About;
