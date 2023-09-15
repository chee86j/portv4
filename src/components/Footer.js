import React from "react";

function Footer() {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
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
      <p>
        Version 1 - Copyright &#169; 2023 Jeffrey Chee. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
