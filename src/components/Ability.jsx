import React from 'react'

const Ability = ({image,text}) => {
  return (
    <div className='flex flex-col col-span-1 gap-2 items-center justify-center rounded-md border border-orange-500 p-5 hover:-translate-y-5 max-sm:hover:-translate-y-1 transition-all duration-300'>
        <img src={image} title={text} alt={text} className='h-auto w-full'/>
        <span className='text-[2rem] max-sm:text-[0.7rem] max-lg:text-lg max-xl:text-2xl'>{text}</span>
    </div>
  )
}

export default Ability