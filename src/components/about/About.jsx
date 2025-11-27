import React from "react";
import "./about.css";
import ME from "../../assets/main2.jpg";
import { IoMdSchool } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div>
            <img src={ME} className="about__me-image" alt="MY iamge" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="#experience">
              <article className="about__card">
                <BsCodeSlash className="about__icon" />
                <h5>Coding</h5>
              </article>
            </a>
            <a href="#education">
              <article className="about__card">
                <IoMdSchool className="about__icon" />
                <h5>Education</h5>
              </article>
            </a>
            <a href="#portfolio">
              <article className="about__card">
                <BsAward className="about__icon" />
                <h5>Projects</h5>
              </article>
            </a>
          </div>
          <p>
            I am a fresher who values qualitative user research and this is
            something where i feel like i can bring a lot to team. As a frontend
            developer, I am committed to staying up-to-date with the latest
            technologies and trends to provide the best possible solutions to
            clients. I am excited to start my career and contribute to creating
            meaningful{" "}
            <span className="typewriter-text">
              <Typewriter
                words={[
                  "web applications",
                  "user experiences",
                  "digital solutions",
                  "innovative projects",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            that make a difference in people's lives.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
