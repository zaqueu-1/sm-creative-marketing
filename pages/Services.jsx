import React, { useState } from 'react'
import Image from 'next/image'

function Services() {

  const [showSubtitle, setShowSubtitle] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  const showSub = (state, title, subtitle) => {
    setShowSubtitle(state)
    setTitle(title)
    setSubtitle(subtitle)
  }

  return (
    <div className='services-container'>
      <div className="services-header">
        <h2 data-aos={"fade-up"} data-aos-duration={"1200"} className='services-title'>Acenda todo o potencial da sua marca!</h2>
        <p data-aos={"fade-left"} data-aos-duration={"1500"} id='services-pillars'>Criatividade | Estratégia | Organização | Comunicação</p>
        <p data-aos={"fade-right"} data-aos-duration={"1200"} className='services-text'>Esses são os pilares que moldam esta agência e é através deles que iremos transformar sua marca em um verdadeiro sucesso!</p>
      <div data-aos={"fade-up"} data-aos-duration={"1500"} className="services-icons">
        <Image onMouseEnter={()=>showSub(true, 'Gerenciamento de Redes Sociais', 'Estratégias criativas para elevar seu posicionamento, profissionalismo e autoridade nas redes sociais. ')} onMouseLeave={()=>setShowSubtitle(false)} className='service-icon' src={require('../public/images/1.png')} alt='image' width='200' height='200' />
        <Image onMouseEnter={()=>showSub(true, 'Branding', 'Seja reconhecido de forma única! Crie uma marca que leve sua personalidade e valores.')} onMouseLeave={()=>setShowSubtitle(false)} className='service-icon' src={require('../public/images/2.png')} alt='image' width='200' height='200' />
        <Image onMouseEnter={()=>showSub(true, 'Tráfego Pago', 'Cresça, tenha visibilidade e alcance um público qualificado para o seu negócio.')} onMouseLeave={()=>setShowSubtitle(false)} className='service-icon' src={require('../public/images/3.png')} alt='image' width='200' height='200' />
        <Image onMouseEnter={()=>showSub(true, 'Design Gráfico', 'Tenha peças únicas e personalizadas para profissionalizar seu negócio e se destacar no digital.')} onMouseLeave={()=>setShowSubtitle(false)} className='service-icon' src={require('../public/images/4.png')} alt='image' width='200' height='200' />
        <Image onMouseEnter={()=>showSub(true, 'Criação de Sites', 'Tenha profissionalismo, aumente sua credibilidade e venda com um negócio online 24h por dia.')} onMouseLeave={()=>setShowSubtitle(false)} className='service-icon' src={require('../public/images/5.png')} alt='image' width='200' height='200' />
      </div>
      <div className="services-subtitles">
        {showSubtitle && (
          <>
            <p className='show-title'>{title}</p>
            <p className='show-subtitle'>{subtitle}</p>
          </>
        )}
      </div>
      </div>
    </div>
  )
}

export default Services
