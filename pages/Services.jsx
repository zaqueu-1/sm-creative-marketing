import React from 'react'
import Dropdown from './components/Dropdown/Dropdown'

function Services() {
  return (
    <div className='services-container'>
      <div className="services-header">
        <h2 data-aos={"fade-up"} data-aos-duration={"1200"} className='services-title'>ACENDA TODO POTENCIAL DE SUA MARCA!</h2>
        <p data-aos={"fade-left"} data-aos-duration={"1500"} id='services-pillars'>Criatividade • Estratégia • Organização • Comunicação</p>
        <p data-aos={"fade-right"} data-aos-duration={"1200"} className='services-text'>Esses são os pilares que moldam esta agência e é através deles que iremos transformar sua marca em um verdadeiro sucesso!</p>
      <div data-aos={"fade-up"} data-aos-duration={"1500"} className="cards">
        <Dropdown title={'Redes Sociais'} subtitle={'Estratégias criativas para elevar seu posicionamento e autoridade nas redes sociais. '} />
        <Dropdown title={'Branding'} subtitle={' Seja reconhecido de forma única! Crie uma marca que leve sua personalidade e valores.'} />
        <Dropdown title={'Tráfego Pago'} subtitle={'Cresça, tenha visibilidade e alcance um público qualificado para o seu negócio.'} />
        <Dropdown title={'Design Gráfico'} subtitle={'Tenha peças únicas e personalizadas para profissionalizar seu negócio e se destacar no digital.'} />
        <Dropdown title={'Criação de Sites'} subtitle={'Tenha profissionalismo, aumente sua credibilidade e venda com um negócio online 24h por dia.'} />
      </div>
      </div>
    </div>
  )
}

export default Services
