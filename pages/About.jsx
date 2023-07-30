import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img1 from '../public/images/p1.jpeg'
import img3 from '../public/images/p3.png'
import img5 from '../public/images/p5.jpg'
import img6 from '../public/images/p6.jpeg'

function About() {

  return (
    <div data-aos={"fade-up"} data-aos-duration={"1000"} className='people-container'>
      <h1 data-aos={"fade-up"} data-aos-duration={"1200"}>NOSSO TIME</h1>
      <p data-aos={"fade-left"} data-aos-duration={"1500"} className='people-sub'>Criamos essa empresa para acender a sua, de forma totalmente criativa!</p>

      <div className="block-wrapper" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <motion.div className="people-wrapper">
              <div className="people">
                <Image className='people-img' src={img1} width='200' height='200' />
                <p>Sabryna Michaelli</p>
                <span>CEO e Social Media</span>
              </div>

              <div className="people">
                <Image className='people-img' src={img3} width='200' height='200' />
                <p>João Victor</p>
                <span>Designer</span>
              </div>

              <div className="people">
                <Image className='people-img' src={img6} width='200' height='200' />
                <p>Gabriel Dias</p>
                <span>Desenvolvedor</span>
              </div>

              <div className="people">
                <Image className='people-img' src={img5} width='200' height='200' />
                <p>Sualis martins</p>
                <span>Social Media</span>
              </div>
          </motion.div>

          <div data-aos={"fade-right"} data-aos-duration={"1200"} className="team-text-wrapper">
            <p>A SM Creative Marketing atende empresas e marcas de diversos segmentos, com o propósito de criar estratégias que as conectem ao seu público de forma humanizada e real.</p>
            <p>Surgimos em 2022 da ideia de divulgar o trabalho de social media e dar dicas para novos empreendedores. Hoje temos como objetivo criar marcas únicas e motivar pessoas a investirem no próprio negócio.</p>
            <p>Acreditamos que a criatividade é o ponto inicial para alcançar o sucesso.</p>
          </div>
      </div>
    </div>
  )
}

export default About
