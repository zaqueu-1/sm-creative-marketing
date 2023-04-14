import React from 'react'
import Image from 'next/image'

function Links() {
  return (
    <div className='linkspage-container'>
      <div className="bg animated" />

      <div className="logo-wrapper">
        <div className="internal-wrapper">
          <Image className='logo linkslogo' src={require('../../public/images/logo.png')} width='450' height='450' alt='image'></Image>
        </div>
      </div>

      <div className="linkcards-wrapper">
        <a href='https://smcreativemarketing.com.br/início' target='_blank'>
          <div className="link-card card1">
            <span className='link-card-title'>Acesse nosso</span>
            <span className='link-card-sub'>SITE OFICIAL</span>
          </div>
        </a>

        <a href='https://smcreativemarketing.com.br/sm' target='_blank'>
          <div className="link-card card2">
            <span className='link-card-title'>Conheça nossos</span>
            <span className='link-card-sub'>SERVIÇOS</span>
          </div>
        </a>

        <a href='https://www.tiktok.com/@smcreativemkt' target='_blank'>
          <div className="link-card card3">
            <span className='link-card-title'>Siga-nos no</span>
            <span className='link-card-sub'>TIKTOK</span>
          </div>
        </a>

        <a href='https://api.whatsapp.com/send?phone=5524998568180' target='_blank'>
          <div className="link-card-small card-contact">
            <span className='link-card-contact'>FALE CONOSCO</span>
          </div>
        </a>
      </div>

      <div className="footer-links">
        <h2>SM Creative Marketing - Todos os direitos reservados</h2>
      </div>
    </div>
  )
}

export default Links

