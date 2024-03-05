import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
