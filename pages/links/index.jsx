import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'

function Links() {
  return (
    <div className='linkspage-container'>
      <div className="bg" />

      <Link href='/'>
        <div className="link-card card1">
          <span className='link-card-title'>Acesse nosso</span>
          <span className='link-card-sub'>SITE OFICIAL</span>
        </div>
      </Link>

      <Link href='/'>
        <div className="link-card card2">
          <span className='link-card-title'>Conheça nossos</span>
          <span className='link-card-sub'>SERVIÇOS</span>
        </div>
      </Link>

      <a href='www.tiktok.com/@smcreativemkt' target='_blank'>
        <div className="link-card card3">
          <span className='link-card-title'>Siga-nos no</span>
          <span className='link-card-sub'>TIKTOK</span>
        </div>
      </a>

      <a href=' https://api.whatsapp.com/send?phone=5524998568180' target='_blank'>
        <div className="link-card-small card-contact">
          <span className='link-card-contact'>FALE CONOSCO!</span>
        </div>
      </a>


    </div>
  )
}

export default Links

