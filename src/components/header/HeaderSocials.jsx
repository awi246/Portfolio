import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (

    <div className="header__socials">
        <a href="https://www.instagram.com/awiral.chand/" target="_blank" rel="noreferrer" ><AiFillInstagram/></a>
        <a href="https://github.com/awi246" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.facebook.com/awiral.chand.9" target="_blank" rel="noreferrer"><AiFillFacebook/></a>

    </div>
    )
}

export default HeaderSocials