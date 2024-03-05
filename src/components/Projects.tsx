import React from "react";
import "./Projects.css";

interface ProjectsProps {
  headerTitle: string;
}

const Projects: React.FC<ProjectsProps> = ({ headerTitle }) => {
  return (
    <div className="projects-container">
      {headerTitle && <h1 className="projects-header">{headerTitle}</h1>}
    </div>
  );
};

export default Projects;
