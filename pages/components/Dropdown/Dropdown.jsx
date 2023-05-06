import React, { useState } from 'react'
import { MdArrowDropDownCircle } from 'react-icons/md'

function Dropdown({title, subtitle}) {
    const [show, setShow] = useState(false)

    const showExplain = () => {
        setShow(!show)
    }

  return (
    <>
        <div onClick={(e) => showExplain()} className='dropdown-container'>
            <p className='drop-title'>{title}</p>
            <MdArrowDropDownCircle className='drop-icon'/>
        </div>
        <div className={show ? 'explanation' : 'hidden'}>
            <p className='drop-subtitle'>{subtitle}</p>
        </div>
    </>
  )
}

export default Dropdown
