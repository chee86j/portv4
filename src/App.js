import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
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
