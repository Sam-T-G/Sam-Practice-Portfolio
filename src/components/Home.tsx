import React from "react";
import "./Home.css";

interface HomeProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

const Home: React.FC<HomeProps> = ({ title, subtitle, heroImage }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div
          className="hero-element"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {title && <h1 className="hero-title">{title}</h1>}
          {subtitle && <h1 className="hero-subtitle">{subtitle}</h1>}
          <img
            className="home-portrait"
            src="/src/assets/self-portrait.jpg"
            alt="home portrait placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
