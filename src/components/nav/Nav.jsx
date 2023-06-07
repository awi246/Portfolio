import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {IoIosSchool} from "react-icons/io"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import './nav.css'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav ==="#"? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==="#about"? 'active':''} ><AiOutlineUser/></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==="#experience"? 'active':''}><BiBookAlt/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav ==="#education"? 'active':''} ><IoIosSchool/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ==="#portfolio"? 'active':''} ><AiOutlineFundProjectionScreen/></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==="#contact"? 'active':''}><BiMessageSquareDetail/></a>
    </nav>

    )
}

export default Nav
