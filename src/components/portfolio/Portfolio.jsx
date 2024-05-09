import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
import IMG7 from "../../assets/img7.png";
import IMG8 from "../../assets/img8.png";
import IMG9 from "../../assets/img9.png";
import IMG10 from "../../assets/img10.png";
import IMG11 from "../../assets/img11.png";
import IMG12 from "../../assets/img12.png";
import IMG17 from "../../assets/img17.png";
import IMG15 from "../../assets/img15.png";
import IMG16 from "../../assets/img16.png";
import IMG18 from "../../assets/img18.png";
import IMG20 from "../../assets/IMG20.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG12} className="portfolio__item-image" alt="" />
          </div>

          <h3>Box Office Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://master--meek-pothos-d119ec.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG18} className="portfolio__item-image" alt="" />
          </div>
          <h3>Students Forum</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG20} className="portfolio__item-image" alt="" />
          </div>

          <h3>Nike Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://tailwind-demo-gold.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG11} className="portfolio__item-image" alt="" />
          </div>
          <h3>TicTacToe</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://main--tictactoeawiral.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG16} className="portfolio__item-image" alt="" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://calculator-tau-vert.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG15} className="portfolio__item-image" alt="" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://wetherawiral.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG17} className="portfolio__item-image" alt="" />
          </div>
          <h3>ToDo Lists</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://to-do-list-dtk1.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG10} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a Old Cv</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a Old Cv</h3>
          <div className="portfolio__item-cta">
            <a href="#contact" className="btn btn-primary" rel="noreferrer">
              Contact For Source Code
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
