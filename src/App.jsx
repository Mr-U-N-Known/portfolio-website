import "./App.css";
import About from "./components/jsxFiles/About";
import Contact from "./components/jsxFiles/Contact";
import Home from "./components/jsxFiles/Home";
import Navbar from "./components/jsxFiles/Navbar";
import Projects from "./components/jsxFiles/Projects";
import Skills from "./components/jsxFiles/Skills";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";

import { HelmetProvider } from "react-helmet-async";

export default class App extends Component {
  componentDidMount() {
    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
  }

  render() {
    return (
      <HelmetProvider>
        <Router basename="/">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </HelmetProvider>
    );
  }
}
