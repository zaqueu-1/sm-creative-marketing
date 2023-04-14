import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img1 from '../public/images/c1.png'
import img2 from '../public/images/c2.png'
import img3 from '../public/images/c3.png'
import img4 from '../public/images/c4.png'
import img5 from '../public/images/c5.png'
import img6 from '../public/images/c6.png'
import img7 from '../public/images/c7.png'

function Clients() {

  const imgs = [img1, img2, img3, img4, img5, img6, img7]
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - (carousel.current?.offsetWidth+100))
  }, [])

  return (
    <div className='clients-container'>
      <h1>Nossos Clientes</h1>

      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div 
          className="carousel-container" 
          drag='x' 
          dragConstraints={{right: width, left: -width}}
          initial={{x:100}}
          animate={{x:0}}
          transition={{duration:0.8}}
        >
          {imgs.map((image, index) => (
          <Image className='client-img' src={image} width='300' height='200' key={index} />
          ))}
      </motion.div>
    </motion.div>
    </div>
  )
}

export default Clients
