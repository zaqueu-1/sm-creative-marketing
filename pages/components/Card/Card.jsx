import React from 'react'

function Card({title, subtitle}) {
  return (
    <div className='card'>
      <span className='card-title'>{title}</span>
      <p className='card-subtitle'>{subtitle}</p>
    </div>
  )
}

export default Card
