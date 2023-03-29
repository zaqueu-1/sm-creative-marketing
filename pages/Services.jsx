import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className='services-container'>
      <div className="services-header">
        <h2 data-aos={"fade-up"} data-aos-duration={"1200"} className='services-title'>Acenda todo o potencial da sua marca!</h2>
        <p data-aos={"fade-left"} data-aos-duration={"1500"} id='services-pillars'>Criatividade | Estratégia | Organização | Comunicação</p>
        <p data-aos={"fade-right"} data-aos-duration={"1200"} className='services-text'>Esses são os pilares que moldam esta agência e é através deles que iremos transformar sua marca em um verdadeiro sucesso!</p>
      <div data-aos={"fade-up"} data-aos-duration={"1500"} className="services-icons">
        <Image className='service-icon' src='/../public/images/1.png' alt='image' width='200' height='200' />
        <Image className='service-icon' src='/../public/images/2.png' alt='image' width='200' height='200' />
        <Image className='service-icon' src='/../public/images/3.png' alt='image' width='200' height='200' />
        <Image className='service-icon' src='/../public/images/4.png' alt='image' width='200' height='200' />
        <Image className='service-icon' src='/../public/images/5.png' alt='image' width='200' height='200' />
      </div>
      </div>
    </div>
  )
}

export default Services
