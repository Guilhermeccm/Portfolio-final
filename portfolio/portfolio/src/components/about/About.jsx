import React from 'react';
import './about.css';
import ME from "../../assets/profilepic.jpg"
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Not much :)</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Adds up to 4</small>
            </article>

         </div>
         
         <p>
          Hi! My name is Guilherme Matos and I'm a 2nd year Computer Science student at FCT | NOVA School of Science and Technology. My interest in web development
          started back in 2018 when I found my self trying to build a copy of the snake game using only HTML and CSS (it didn't workout)!
         </p>
         <p>
         In the present time, I'm having the priveledge of learning new technologies, however nothing beats web development for me. I'm currently building some self taught projects 
         such as this portfolio.
         </p>
    
        </div>
      </div>
    </section>
  )
}

export default About