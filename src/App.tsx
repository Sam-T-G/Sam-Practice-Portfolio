import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            index
            element={<Home title="Sam Gerungan" subtitle="" heroImage="" />}
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
              <About aboutHeader="Inspired by a lustrous background in both visual and musical arts" />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
