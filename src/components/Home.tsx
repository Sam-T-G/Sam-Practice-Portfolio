import React from "react";
import "./Home.css";

interface HomeProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-element"></div>
      </div>
    </div>
  );
};

export default Home;
