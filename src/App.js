import React, { useState, useEffect } from "react";
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
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkModeToggler();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className="dark-mode-toggler">
        <input
          type="checkbox"
          id="darkmode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkmode-toggle">
          <img src={sunIcon} alt="Sun Icon" className="sun-icon" />
          <img src={moonIcon} alt="Moon Icon" className="moon-icon" />
        </label>
      </div>
      <Navbar toggleMenu={toggleMenu} />
      <Profile id="profile" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
