import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

function DarkModeToggler({ isDarkMode, setIsDarkMode }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="dark-mode-toggler" data-aos="fade-up">
      <label htmlFor="darkmode-toggle">
        <input
          type="checkbox"
          id="darkmode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <img src={sunIcon} alt="Sun Icon" className="sun-icon" />
        <img src={moonIcon} alt="Moon Icon" className="moon-icon" />
      </label>
    </div>
  );
}

export default DarkModeToggler;
