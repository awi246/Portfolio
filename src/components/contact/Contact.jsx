import React from 'react'
import "./contact.css"
import {CiMail} from "react-icons/ci"
import {FaFacebookMessenger} from "react-icons/fa"
import {TbBrandWhatsapp} from "react-icons/tb"
import {BsFillSendFill} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3j7vl7h', 'template_29vcnxx', form.current, 'Wgf1T4hd0N8KPj6eG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id= "contact"> 
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>awiral1234@gmail.com</h5>
            <a href="mailto:awiral1234@gmail.com" target="_blank">Send a Mail</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Awiral Chand</h5>
            <a href="https://m.me/awiral.chand.9" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <TbBrandWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>9865767053</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779865767053" target="_blank">Send a WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Mail' required />
          <textarea name="message" placeholder='Your Message' cols="30" rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message <br /><BsFillSendFill/></button>
        </form>
      </div>
      </section>
  )
}

export default Contact