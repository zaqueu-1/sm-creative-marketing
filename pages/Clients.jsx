import React, { useState, useEffect, useRef } from 'react'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

function Clients() {

  const imgs = [
    {url:'/images/c1.png'},
    {url:'/images/c2.png'},
    {url:'/images/c3.png'},
    {url:'/images/c4.png'},
    {url: '/images/c5.png'},
    {url:'/images/c6.png'},
    {url:'/images/c7.png'},
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
    }, 2500)

    return () => {
      clearInterval(intervalRef.current)
    };
  }, [index]);

  return (
    <div data-aos={"fade-up"} data-aos-duration={"1200"} className='clients-container'>
      <h1 data-aos={"fade-left"} data-aos-duration={"1500"}>NOSSOS CLIENTES</h1>
      <p data-aos={"fade-right"} data-aos-duration={"1800"}className='contact-sub'>Um pouco do que já construímos</p>

      <div data-aos={"fade-up"} data-aos-duration={"2100"} className='outer'>
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
