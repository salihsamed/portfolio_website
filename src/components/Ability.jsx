import React from 'react'

const Ability = ({image,text}) => {
  return (
    <div className='flex flex-col items-center gap-1'>
        <img src={image} title={text} alt={text} className='h-10 w-10'/>
        <span>{text}</span>
    </div>
  )
}

export default Ability