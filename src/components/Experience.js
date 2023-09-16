import React from "react";
import CheckMarkIcon from "../assets/checkmark.png";
import FrontEndIconData from "../assets/FrontEndIcons";
import BackEndIconData from "../assets/BackEndIcons";
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
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>JavaScript (React/Redux)</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>HTML5</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>TailwindCSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>GitHub</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>VSCode</h3>
                  <p>Proficient</p>
                </div>
              </article>
            </div>
          </div>

          {/* Backend Development Details */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>JavaScript (Node.js)</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>Express</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>Sequelize</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>RESTful API</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>OOP</h3>
                  <p>Proficient</p>
                </div>
              </article>
              <article>
                <img src={CheckMarkIcon} alt="checkmark" className="icon" />
                <div>
                  <h3>DB Management</h3>
                  <p>Proficient</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowDownIcon}
        alt="Down Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
}

export default Experience;
