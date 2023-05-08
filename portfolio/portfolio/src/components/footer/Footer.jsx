import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'



function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Guilherme</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram/></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Guilherme Matos. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer