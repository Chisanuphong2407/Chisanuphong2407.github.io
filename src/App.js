import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//contents
import Home from "./contents/Home";
import Education from "./contents/education";
import About from "./contents/About";
import Skills from "./contents/skills";
import Contact from "./contents/Contact";
import Project from "./contents/Project"

function App() {
  return (
    <Router>
      <div className="App" id="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Project" element={<Project />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
