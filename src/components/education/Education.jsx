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
            <h2 className='name'>Kanchan Vidya Mandir</h2>
            <small className='address'>Mahendranagar, Kanchanpur</small>
            
        </div>
        </article>
        <article className="art">
        <div className='details'>
            <h2 className='name'>Radiant Secondary School</h2>
            <small className='address'>(Science)</small>

        </div>
        </article>
        <article className="art">

        <div className='details'>
            <h2 className='name'>Texas international college</h2>
            <small className='address'>(Bsc CSIT)</small>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Education