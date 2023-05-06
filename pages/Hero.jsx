import React from 'react'
import Image from 'next/image'
import { CiFacebook, CiInstagram,  } from 'react-icons/ci'
import { TbBrandTiktok } from 'react-icons/tb'

function Hero() {

  const goTo = (url) => () => {
    window.open(url, '_blank')
  }
  
  return (
    <div className='hero-container'>
      <div className="texts">
        <h2 data-aos={"fade-right"} data-aos-duration={"1200"} className='home-text'>BOAS IDEIAS</h2>
        <h2 data-aos={"fade-right"} data-aos-duration={"1500"} className='home-text'>DEVEM SEMPRE</h2>
        <h2 data-aos={"fade-left"} data-aos-duration={"1800"} className='home-bigtext'>BRILHAR</h2>
        <div data-aos={"fade-up"} data-aos-duration={"1500"} className="controls">
          <button onClick={goTo('https://wa.me/5524998568180')} className="talk-btn">FALE CONOSCO</button>
          <div data-aos={"zoom-in"} data-aos-duration={"1500"} className="social-media">
            <a target='_blank' href='https://www.facebook.com/sabrynasm06?mibextid=LQQJ4d'>
              <CiFacebook className='icon' />
            </a>
            <a target='_blank' href='https://www.instagram.com/smcreative.mkt/'>
              <CiInstagram className='icon' />
            </a>
            <a target='_blank' href='https://www.tiktok.com/@smcreativemkt'>
              <TbBrandTiktok className='icon' />
            </a>
          </div>
        </div>
      </div>

      <div data-aos={"fade-up"} data-aos-duration={"1500"} className="image-wrapper">
        <Image width='600' height='600' className='logo' src={require('../public/images/logo.png')} alt='logo' />
      </div>

    </div>
  )
}

export default Hero
