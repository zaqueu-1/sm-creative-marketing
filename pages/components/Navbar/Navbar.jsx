import React, { useState } from 'react'

function Navbar({scroll}) {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const sidebarToggler = () => setSidebarIsOpen(!sidebarIsOpen)

  return (
    <div className='navbar-container'>
      <a className='link' onClick={() => scroll('hero')}>Início</a>
      <a className='link' onClick={() => scroll('services')}>Serviços</a>
      <a className='link' onClick={() => scroll('clients')}>Clientes</a>
      <a className='link' onClick={() => scroll('about')}>Sobre</a>
      <a className='link' onClick={() => scroll('contact')}>Contato</a>
    </div>
  )
}

export default Navbar
