import React from "react";
import "./Projects.css";

interface ProjectsProps {
  headerTitle: string;
}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="projects-container">
      <div className="projects-header"></div>
    </div>
  );
};

export default Projects;
