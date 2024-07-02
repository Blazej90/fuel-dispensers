import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Measurements from "./pages/Measurements/Measurements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/measurements" element={<Measurements />} />
      </Routes>
    </Router>
  );
}

export default App;
