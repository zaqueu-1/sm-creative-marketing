import React from 'react'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'

function Footer({scroll}) {

    const goTo = (url) => () => {
        window.open(url, '_blank')
      }

  return (
    <div className='footer-container'>
        <div className="image-wrapper-f">
            <Image src='/images/logo.png' width='80' height='80' />
        </div>

        <div className="footer-divider" />

        <p className='footer-text'>SM Creative Marketing ©2022 Todos os Direitos Reservados</p>

        <div className="footer-divider" />

        <div className="contacts">
            <p onClick={goTo('https://wa.me/5524998568180')}>
                <FaWhatsapp />
                (24)99856-8180</p>
            <p>
                <FaInstagram />
                @smcreative.mkt</p>
            <p>
                <FaTiktok />
                @smcreativemkt</p>
        </div>

        <div className="footer-divider" />

        <ul>
            <li onClick={() => scroll('hero')}>Início</li>
            <li onClick={() => scroll('services')}>Serviços</li>
            <li onClick={() => scroll('clients')}>Clientes</li>
            <li onClick={() => scroll('about')}>Sobre</li>
            <li onClick={() => scroll('contact')}>Contato</li>
        </ul>

    </div>
  )
}

export default Footer
