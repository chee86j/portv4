import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useDarkModeToggler from "./hooks/useDarkMode";
import sunIcon from "./assets/sun.png";
import moonIcon from "./assets/moon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkModeToggler();
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="dark-mode-toggler" data-aos="fade-up">
                    <input
                      type="checkbox"
                      id="darkmode-toggle"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                    />
                    <label htmlFor="darkmode-toggle">
                      <img src={sunIcon} alt="Sun Icon" className="sun-icon" />
                      <img
                        src={moonIcon}
                        alt="Moon Icon"
                        className="moon-icon"
                      />
                    </label>
                  </div>
                  <Navbar toggleMenu={toggleMenu} data-aos="fade-up" />
                  <Profile id="profile" data-aos="fade-up" />
                  <About id="about" data-aos="fade-up" />
                  <Experience id="experience" data-aos="fade-up" />
                  <Projects id="projects" data-aos="fade-up" />
                  <Contact id="contact" data-aos="fade-up" />
                  <Footer data-aos="fade-up" />
                </>
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}
