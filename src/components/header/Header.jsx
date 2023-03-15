import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/profilephoto.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Awiral Chand</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    )
}

export default Header