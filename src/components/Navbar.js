import React, { useState } from "react";
import useDarkModeToggler from "../hooks/useDarkMode";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkModeToggler();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Jeffrey Chee</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Jeffrey Chee</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <div className="dark-mode-toggler">
        <input
          type="checkbox"
          id="darkmode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="darkmode-toggle">
          <img
            src={sunIcon}
            alt="Sun Icon"
            className={isDarkMode ? "hidden" : ""}
          />
          <img
            src={moonIcon}
            alt="Moon Icon"
            className={isDarkMode ? "" : "hidden"}
          />
        </label>
      </div>
    </>
  );
}

export default Navbar;
