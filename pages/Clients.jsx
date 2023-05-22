import React, { useState, useEffect, useRef } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

function Clients() {

  const imgs = [
    {url:'http://localhost:8000/images/c1.png'},
    {url:'http://localhost:8000/images/c2.png'},
    {url:'http://localhost:8000/images/c3.png'},
    {url:'http://localhost:8000/images/c4.png'},
    {url:'http://localhost:8000/images/c5.png'},
    {url:'http://localhost:8000/images/c6.png'},
  ]

  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  const previous = () => {
    const isFirst = index === 0
    const newIndex = (isFirst ? imgs.length-1 : index-1)
    setIndex(newIndex)
  }

  const next = () => {
    const isLast = index === imgs.length-1
    const newIndex = (isLast ? 0 : index+1)
    setIndex(newIndex)
  }

  const goTo = (dotindex) => {
    setIndex(dotindex)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next()
    }, 2000)

    return () => {
      clearInterval(intervalRef.current)
    };
  }, [index]);

  return (
    <div data-aos={"fade-up"} data-aos-duration={"1200"} className='clients-container'>
      <h1>NOSSOS CLIENTES</h1>
      <p className='contact-sub'>Um pouco do que já construímos</p>

      <div className='outer'>
        <div className='inner' style={{backgroundImage:`url(${imgs[index].url})`, width:'100%', height:'100%' }} />
        <div onClick={previous} className='left-arrow'><BsFillArrowLeftCircleFill /></div>
        <div onClick={next} className='right-arrow'><BsFillArrowRightCircleFill /></div>
        <div className='selector'>
          {imgs.map((img, dotIndex) => (
            <div onClick={(e) => goTo(dotIndex)} key={dotIndex}><GoPrimitiveDot className='dot'/></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
