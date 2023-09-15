import { useState, useEffect } from "react";

function useDarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
    }
  };

  return [isDarkMode, toggleDarkMode];
}

export default useDarkModeToggler;
