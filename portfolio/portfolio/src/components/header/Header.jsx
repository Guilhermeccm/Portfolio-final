import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div id='header' className='container header__container'>
        <h5>Hello, my name is</h5>
        <h1>Guilherme Matos</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header