import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function Links() {
  return (

    <>
      <Head>
        <title>Links | SM Creative Marketing</title>
        <meta name="description" content="Boas ideias devem sempre brilhar!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='linkspage-container'>
        <div className="bg animated" />

        <div className="logo-wrapper">
          <div className="internal-wrapper">
            <Image className='logo linkslogo' src={require('../../public/images/logo.png')} width='450' height='450' alt='image'></Image>
            <h3>Acenda todo o potencial da sua marca!</h3>
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

        <div className="footer-container-s">
          <p className='footer-s'>SM Creative Marketing - Todos os direitos reservados</p>
        </div>
      </div>
    </>

  )
}

export default Links

