import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lvki2vw', 'template_sr1hd0r', form.current, 'OE9DADAGNeUgHwmu7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>guilhermematosn1@gmail.com</h5>
            <a href="mailto:guilhermematosn1@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          {/* WHATSAPP */}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+351 925430829</h5>
            <a href="https://wa.me/+351925430829" target="_blank" rel="noreferrer">Send a message on WhatsApp</a>
          </article>

          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact