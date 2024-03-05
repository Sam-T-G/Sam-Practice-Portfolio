import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home title="Sam Gerungan" subtitle="" heroImage="" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
