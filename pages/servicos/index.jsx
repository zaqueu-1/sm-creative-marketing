import React, { useState } from 'react'
import Image from 'next/image'

function Servicos() {

    const [image, setImage] = useState(1)

    const handleMouseOver = (num) => {
        setImage(num)
    }

    const handleMouseOut = (num) => {
        setImage(num)
    }



  return (
    <div className='linkspage-container'>
      <div className="bg animated" />

      <div className="logo-wrapper">
        <div className="internal-wrapper">
          <Image className='logo linkslogo' src={require('../../public/images/logo.png')} width='450' height='450' alt='image'></Image>
          <h3>Conheça um pouco do que temos a oferecer!</h3>
        </div>
      </div>

        <div className="fullbox">
            <div className="servicecard-wrapper">
                <div className="servicecard" onMouseOver={(e) => handleMouseOver(1)} onMouseOut={(e) => handleMouseOut(1)}>
                    <h2 className='servicecard-title'>Gerenciamento de Redes Sociais</h2>
                    <h3 className='servicecard-sub'>Uma equipe especializada para criar e pôr em prática estratégias criativas que irão elevar seu posicionamento, profissionalismo e autoridade nas redes sociais. </h3>
                    <ul className='servicecard-list'>
                        <li>Planejamento estratégico focado em um objetivo</li>
                        <li>Análise da marca e de concorrentes</li>
                        <li>Calendário de conteúdo com artes gráficas, legendas e metas mensais</li>
                        <li>Edição de vídeos</li>
                        <li>Agendamento de conteúdo</li>
                        <li>Relatório de desempenho</li>
                        <li>Suporte</li>
                    </ul>
                </div>

                <div className="servicecard" onMouseOver={(e) => handleMouseOver(2)} onMouseOut={(e) => handleMouseOut(2)}>
                    <h2 className='servicecard-title'>Design Gráfico</h2>
                    <h3 className='servicecard-sub'>Tenha peças únicas e personalizadas para profissionalizar seu negócio e se destacar on e offline . </h3>
                    <ul className='servicecard-list'>
                        <li>Identidade visual</li>
                        <li>Artes para redes sociais</li>
                        <li>Banners</li>
                        <li>Panfletos</li>
                    </ul>
                </div>

                <div className="servicecard" onMouseOver={(e) => handleMouseOver(3)} onMouseOut={(e) => handleMouseOut(3)} >
                    <h2 className='servicecard-title'>Start SM</h2>
                    <h3 className='servicecard-sub'>A melhor forma de começar a se profissionalizar com economia. </h3>
                    <h3 className='servicecard-sub'>Criado para novos e pequenos empreendedores, O Start SM foi feito para te ajudar a mostrar de forma simples e direta seus valores, benefícios e diferenciais. Tudo isso através da estética de um perfil bem organizado. </h3>
                    <ul className='servicecard-list'>
                        <li>Análise de perfil para definir o material ideal</li>
                        <li>12 artes específicas para seu negócio, seguindo sua identidade visual</li>
                        <li>3 destaques com informações claras e indispensáveis </li>
                        <li>Estruturação da bio</li>
                        <li>Sugestão de foto de perfil</li>
                        <li>Legendas para todas as artes</li>
                        <li>Plano de ação</li>
                    </ul>
                </div>

                <div className="servicecard" onMouseOver={(e) => handleMouseOver(4)} onMouseOut={(e) => handleMouseOut(4)}>
                    <h2 className='servicecard-title'>Criação de Sites</h2>
                    <h3 className='servicecard-sub'>Tenha profissionalismo, aumente sua credibilidade e venda com um negócio online 24h por dia. </h3>
                    <ul className='servicecard-list'>
                        <li>Landing pages</li>
                        <li>Página de links</li>
                        <li>Hospedagem </li>
                        <li>Domínio</li>
                    </ul>
                </div>

                <div className="servicecard" onMouseOver={(e) => handleMouseOver(5)} onMouseOut={(e) => handleMouseOut(5)}>
                    <h2 className='servicecard-title'>Identidade Visual</h2>
                    <h3 className='servicecard-sub'>Seja reconhecido de forma única! Crie uma marca que leve sua personalidade e valores. </h3>
                    <ul className='servicecard-list'>
                        <li>Logotipo</li>
                        <li>Conceito</li>
                        <li>Tipografia </li>
                        <li>Paleta de cores</li>
                        <li>Aplicação</li>
                    </ul>
                </div>

                <div className="servicecard" onMouseOver={(e) => handleMouseOver(6)} onMouseOut={(e) => handleMouseOut(6)}>
                    <h2 className='servicecard-title'>Tráfego Pago</h2>
                    <h3 className='servicecard-sub'>Cresça, tenha visibilidade e alcance um público qualificado para o seu negócio. </h3>
                    <ul className='servicecard-list'>
                        <li>Criação de campanhas</li>
                        <li>Otimização diárias das campanhas</li>
                        <li>Criação das estruturas de remarketing</li>
                        <li>Relatório</li>
                        <li>Três Criativos para anúncios</li>
                        <li>Criação de copy</li>
                    </ul>
                </div>
            </div>
            {image && <Image className='pic' />}
        </div>




      <div className="footer-links">
        <h2>SM Creative Marketing - Todos os direitos reservados</h2>
      </div>
    </div>
  )
}

export default Servicos

