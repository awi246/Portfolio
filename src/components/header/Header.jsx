import React from "react";
import "./header.css";
// import ME from '../../assets/profilephoto.png'
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import CV from "../../assets/AwiralChandCV.pdf";
import meImage from '../../assets/2ndPhoto.png';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Awiral Chand</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <div className="cta">
          <a href={CV} download="Awiral Resume" className="btn">
            {" "}
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div>
          {/* <img src={ME} alt="" /> */}
        </div>

        <div className="header__socials">
        <a href="https://www.linkedin.com/in/awiral-chand-29b957269/" target="_blank" rel="noreferrer">
          <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/awiral.chand/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
         
          <a
            href="https://www.facebook.com/awiral.chand.9"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
        </div>
        <div className="profile-picture">
  <div className="profile-picture-background">
    <img src={meImage} alt="Profile" />
  </div>
</div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
