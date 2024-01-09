import React from "react";
import FrontEndIconData from "../assets/IconData/FrontEndIcons";
import BackEndIconData from "../assets/IconData/BackEndIcons";
import arrowDownIcon from "../assets/arrow.png";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development Details */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {FrontEndIconData.map((item, index) => (
                <div key={index} className="icon">
                  <i>{item.icon}</i>
                  <span>{item.name}</span>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Backend Development Details */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {BackEndIconData.map((item, index) => (
                <div key={index} className="icon">
                  <i>{item.icon}</i>
                  <span>{item.name}</span>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="#projects">
        <img src={arrowDownIcon} alt="Down Arrow" className="icon arrow" />
      </a>
    </section>
  );
}

export default Experience;
