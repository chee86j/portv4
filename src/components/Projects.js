import React, { useRef } from "react";
import useCardTilt from "../hooks/useCardTilt";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import Project4 from "../assets/project-4v2.png";
import arrowDownIcon from "../assets/arrow.png";

function Projects() {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  useCardTilt(project1Ref);
  useCardTilt(project2Ref);
  useCardTilt(project3Ref);
  useCardTilt(project4Ref);

  return (
    <section id="projects">
      <p className="section__text__p1">Explore My Recent Work</p>
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
              E-commerce platform built with the PERN stack, offering a
              streamlined shopping experience, secure Stripe payments, and
              scalable features for the future of online retail.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/chee86j/acme-web-store")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://acme-web-store.up.railway.app/")
                }
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
              PERN stack app that explores degrees of separation using a BFS
              algorithm for efficient pathfinding through a graph of Actors and
              Movies.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/chee86j/Reel_Relations2-JeffRender"
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://reelrelations.up.railway.app/")
                }
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
              with a rich audio-visual experience. Experience customizable
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
          {/* Project 4 Details */}
          <div
            className="details-container color-container"
            ref={project4Ref}
            data-tilt
          >
            <div className="article-container">
              <img src={Project4} alt="Project 4" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Manny's Seamless Gutters
            </h2>
            <p className="project-text">
              Contracted Lead Generation job for a Seamless Gutter Contractor
              with Feature Rich Admin Interface for Managing Leads, Quotes, User
              Interactions & P&L Statements streamlining Business Ops with
              Integrated DB Management & Real-Time Updates.
            </p>
            <div className="btn-container">
              {/* <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://github.com/chee86j/MannysGuttersPERN")
                }
              >
                Github
              </button> */}
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open("https://mannysseamlessgutters.up.railway.app/")
                }
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
