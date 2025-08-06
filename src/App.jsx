import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Admin from "./components/Admin";

function App() {
  // const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.classList.toggle("dark", darkMode);
  // }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Projects />
              <Skills />
              <Contact />
            </Layout>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
