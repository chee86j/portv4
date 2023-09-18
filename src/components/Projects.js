import React, { useRef } from "react";
import useCardTilt from "../hooks/useCardTilt";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import arrowDownIcon from "../assets/arrow.png";

function Projects() {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useCardTilt(project1Ref);
  useCardTilt(project2Ref);
  useCardTilt(project3Ref);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Project 1 Details */}
          <div
            className="details-container color-container"
            ref={project1Ref}
            data-tilt
          >
            <div className="article-container">
              <img src={Project1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Acme Web Store
            </h2>
            <p className="project-text">
              White-Label E-commerce Store: PERN Stack App with seamless
              shopping, secure payments via Stripe, personalized
              recommendations, and developer-friendly scalability, defining the
              future of online retail.{" "}
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/StonefortSolutions/acme-web-store"
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/")}
              >
                Demo
              </button>
            </div>
          </div>
          {/* Project 2 Details */}
          <div
            className="details-container color-container"
            ref={project2Ref}
            data-tilt
          >
            <div className="article-container">
              <img src={Project2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Reel Relations
            </h2>
            <p className="project-text">
              PERN Stack App exploring to Discover the degrees of separation
              between two actors and identifies common movies in their careers
              employing a BFS algorithm for efficient pathfinding through a
              graph of Actors and Movies.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/ReelRelationsGroup/Reel_Relations2"
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://github.com/")}
              >
                Demo
              </button>
            </div>
          </div>
          {/* Project 3 Details */}
          <div
            className="details-container color-container"
            ref={project3Ref}
            data-tilt
          >
            <div className="article-container">
              <img src={Project3} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Tetris Beats TS
            </h2>
            <p className="project-text">
              A modern Tetris clone, Tetris Beat TS harmonizes classic gameplay
              with contemporary music and visuals. Experience customizable
              themes, dynamic audio-visual synergy, and draggable controls in
              this immersive app.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/chee86j/Tetris-Beats-TS")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.open("https://ts-tetris.onrender.com")}
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowDownIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.hash = "contact")}
      />
    </section>
  );
}

export default Projects;
