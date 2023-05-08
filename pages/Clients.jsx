import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img1 from '../public/images/c1.png'
import img2 from '../public/images/c2.png'
import img3 from '../public/images/c3.png'
import img4 from '../public/images/c4.png'
import img5 from '../public/images/c5.png'
import img6 from '../public/images/c6.png'

function Clients() {

  const imgs = [img1, img2, img3, img4, img5, img6]

  return (
    <div data-aos={"fade-up"} data-aos-duration={"1200"} className='clients-container'>
      <h1>NOSSOS CLIENTES</h1>

      <motion.div className="carousel">
        <motion.div 
          className="carousel-container" 
          initial={{x:100}}
          animate={{x:0}}
          transition={{duration:0.8}}
        >
          {imgs.map((image, index) => (
          <Image className='client-img' src={image} width='250' height='250' key={index} />
          ))}
      </motion.div>
    </motion.div>
    </div>
  )
}

export default Clients
