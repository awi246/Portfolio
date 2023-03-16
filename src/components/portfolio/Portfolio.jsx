import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'
import IMG7 from '../../assets/img7.png'
import IMG8 from '../../assets/img8.png'
import IMG9 from '../../assets/img9.png'
import IMG10 from '../../assets/img10.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} className="portfolio__item-image" alt="" />
          </div>
            <h3>Store Website</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Store" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG2} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Store" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG3} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Store" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} className="portfolio__item-image" alt="" />
          </div>
          <h3>Store Website</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Store" className="btn btn-primary" target="_blank">GitHub</a> 
            
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG7} className="portfolio__item-image" alt="" />
          </div>
            <h3>This is old Portfolio</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Old-Portfolio" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG8} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Old-Portfolio" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG9} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Old-Portfolio" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG10} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is old Portfolio</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Old-Portfolio" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG5} className="portfolio__item-image" alt="" />
          </div>
            <h3>This is a Old Cv</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Old-CV" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG6} className="portfolio__item-image" alt="" />
          </div>
          <h3>This is a Old Cv</h3>
            <div className="portfolio__item-cta">

            <a href="https://github.com/awi246/Old-CV" className="btn btn-primary" target="_blank">GitHub</a> 
            </div>
        </article>
        
      </div>
    </section>
  )
}
export default Portfolio