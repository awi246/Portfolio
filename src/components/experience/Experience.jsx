import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development </h3>
          <div className="experience__content">
                        
          <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>ReactJS</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
                        
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>InertiaJS</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
                        
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>NextJS</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
                        
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Redux</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
                        
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Tailwind CSS</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>HTML</h4>
              <small >Experienced <br /></small>
              </div>
            </articel>
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>CSS</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>JavaScript</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>         
          </div>
          
        </div>
        <div className="experience__other">
          <h3>Other Languages </h3>
          <div className="experience__content">
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Java</h4>
              <small>Intermediate <br /></small>
              </div>
            </articel>
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>C/C++</h4>
              <small>Experienced <br /></small>
              </div>
            </articel>
            <articel className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
              <h4>Git</h4>
              <small>Experienced</small>
              </div>
            </articel>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
