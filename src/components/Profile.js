/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePic}
          alt="Jeffrey Chee profile headshot"
          className="about-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Jeffrey Chee</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <button
            className="download-cv-btn"
            onClick={() => {
              window.location.href =
                "https://drive.google.com/file/d/1HnTYDj4t8gHz-wKBYbatXb4Tm1IGLNFT/view?usp=sharing";
            }}
          >
            Download CV
          </button>

          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={LinkedInIcon}
            alt="My LinkedIn"
            className="LinkedInIcon"
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/jeffchee86/")
            }
          />
          <img
            src={GitHubIcon}
            alt="My Github"
            className="GithubIcon"
            onClick={() =>
              (window.location.href = "https://github.com/chee86j")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
