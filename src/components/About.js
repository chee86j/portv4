import React, { useRef } from "react";
import useCardTilt from "../hooks/useCardTilt";
import EducationIcon from "../assets/education.png";
import arrowDownIcon from "../assets/arrow.png";
import aboutPic from "../assets/about-pic.jpg";
import ExperienceIcon from "../assets/experience.png";

function About() {
  const details1Ref = useRef(null);
  const details2Ref = useRef(null);

  useCardTilt(details1Ref);
  useCardTilt(details2Ref);

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container" ref={details1Ref} data-tilt>
              <img
                src={ExperienceIcon}
                alt="Experience icon"
                className="ExpIcon"
              />
              <h3>Experience</h3>
              <p>
                FullStack Academy - Software Engineering Immersive Cert.
              </p>
            </div>
            <div className="details-container" ref={details2Ref} data-tilt>
              <img
                src={EducationIcon}
                alt="Education icon"
                className="EducationIcon"
              />
              <h3>Education</h3>
              <p>
                Bernard Baruch College - B.Sc. Public Affairs
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Jeffrey transitioned over a decade's worth of Real Estate Property
              Management experience to Software Engineering, combining his sharp
              problem-solving skills with keen insights from property dealings.
              He noticed surprising parallels between managing properties and
              coding. In his tech role, he hopes to harness his past experience,
              offering innovative software solutions that address practical
              challenges. With a foundation in real estate and a passion for
              tech, he’s dedicated to creating impactful tools that enhance
              business operations and user experiences.
            </p>
          </div>
        </div>
      </div>
      <a href="#experience">
        <img src={arrowDownIcon} alt="Down Arrow" className="icon arrow" />
      </a>
    </section>
  );
}

export default About;
