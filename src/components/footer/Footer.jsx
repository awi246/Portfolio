import React from 'react'
import "./footer.css"
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Awiral</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.instagram.com/awiral.chand/" target="_blank" rel="noreferrer" ><AiFillInstagram/></a>
        <a href="https://github.com/awi246" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.facebook.com/awiral.chand.9" target="_blank" rel="noreferrer"><AiFillFacebook/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Awiral Chand. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer