import React from 'react'
import Card from './components/Card/Card'

function Services() {
  return (
    <div className='services-container'>
      <div className="services-header">
        <h2 data-aos={"fade-up"} data-aos-duration={"1200"} className='services-title'>Acenda todo o potencial da sua marca!</h2>
        <p data-aos={"fade-left"} data-aos-duration={"1500"} id='services-pillars'>Criatividade | Estratégia | Organização | Comunicação</p>
        <p data-aos={"fade-right"} data-aos-duration={"1200"} className='services-text'>Esses são os pilares que moldam esta agência e é através deles que iremos transformar sua marca em um verdadeiro sucesso!</p>
      <div data-aos={"fade-up"} data-aos-duration={"1500"} className="cards">
        <Card title={'Gerenciamento de Redes Sociais'} subtitle={'Estratégias criativas para elevar seu posicionamento e autoridade nas redes sociais. '} />
        <Card title={'Branding'} subtitle={' Seja reconhecido de forma única! Crie uma marca que leve sua personalidade e valores.'} />
        <Card title={'Tráfego Pago'} subtitle={'Cresça, tenha visibilidade e alcance um público qualificado para o seu negócio.'} />
        <Card title={'Design Gráfico'} subtitle={'Tenha peças únicas e personalizadas para profissionalizar seu negócio e se destacar no digital.'} />
        <Card title={'Criação de Sites'} subtitle={'Tenha profissionalismo, aumente sua credibilidade e venda com um negócio online 24h por dia.'} />
      </div>
      </div>
    </div>
  )
}

export default Services
