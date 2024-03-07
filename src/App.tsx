import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              index
              element={
                <Home
                  title="Sam Gerungan"
                  subtitle="Software Engineer with an eye for design, passion for innovation, and meticulous attention to detail"
                  heroImage=""
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects headerTitle="Creative, Aesthetically Pleasing, Functional" />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  aboutHeader="Inspired by a lustrous background in both visual and musical arts"
                  aboutText="With formal education in the musical arts and Professional Experience in photography and the visual arts,"
                />
              }
            />
          </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
