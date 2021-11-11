import React from "react";
import Login from "./pages/login";
import './assets/style.css'
import './assets/libs/css/style.css'
import Home from './pages/home'
import Details from "./pages/details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/show/id=:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
