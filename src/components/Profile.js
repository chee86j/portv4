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
              const link = document.createElement("a");
              link.href = "https://docs.google.com/document/d/1s4OyNb-xy5mqUtxnz0jidDka9DasU9iN/edit?usp=sharing&ouid=111575396071781908443&rtpof=true&sd=true";
              link.setAttribute("download", "Jeffrey_Chee_CV_Resume.pdf"); 
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
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
