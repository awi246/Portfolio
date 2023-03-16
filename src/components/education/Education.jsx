import React from 'react'
import './education.css'
import {IoIosSchool} from "react-icons/io"

const Education = () => {
  return (
    <section id='education'>
        
      <h2>My Education</h2>
      <div className='edu__container'>
        <article className="art">

        <div className='details'>
            <IoIosSchool className="edu__details-icons"/>
            <h2 className='name'>Kanchan Vidya Mandir</h2>
            <small className='address'>Mahendranagar, Kanchanpur</small>
            
        </div>
        </article>
        <article className="art">
        <div className='details'>
        <IoIosSchool className="edu__details-icons"/>
            <h2 className='name'>Radiant Secondary School</h2>
            <small className='address'>Mahendranagar, Kanchanpur</small>
            <h3 className='course'>Science</h3>

        </div>
        </article>
        <article className="art">

        <div className='details'>
        <IoIosSchool className="edu__details-icons"/>
            <h2 className='name'>Texas international college</h2>
            <small className='address'>Mitrapark, Kathmandu</small>
            <h3 className='course'>Bsc CSIT</h3>
            <small>On Going</small>

        </div>
        </article>
      </div>
    </section>
  )
}

export default Education