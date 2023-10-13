import React from 'react'
import { useTranslation } from 'react-i18next'
import {AiOutlineMail, AiFillPhone, AiFillLinkedin } from 'react-icons/ai'

const ContactSection = () => {
    
    const{t}=useTranslation();
  return (
    <div className='h-screen max-sm:h-[50dvh] w-full px-20 max-xl:px-0'>
        <div className='h-[6rem] text-[4rem] max-sm:text-[3rem] max-sm:text-center max-xl:px-20'>{t("Iletisim")}</div>
        <div className='h-[calc(100vh-6rem)] max-sm:h-auto flex flex-col md:justify-center max-sm:mt-20 items-center'>
            <div className='flex items-center max-sm:justify-center gap-5 max-sm:gap-0 w-[50%] max-xl:w-[90%]'>
                <AiFillPhone className='text-[4rem] max-lg:text-[3rem] max-sm:text-3xl'/>
                <p className='text-[3rem] max-sm:text-2xl'>+90 553 575 20 36</p>
            </div>
            <div className='flex items-center max-sm:justify-center  gap-5 max-sm:gap-1 w-[50%] max-xl:w-[90%]'>
                <AiOutlineMail className='text-[4rem] max-lg:text-[3rem] max-sm:text-3xl'/>
                <p className='text-[3rem] max-sm:text-sm max-lg:text-[2.5rem]'>salihsamedavsar@gmail.com</p>
            </div>
            <div className='w-[50%] flex max-xl:w-[91%] max-sm:justify-center '>
                <a href="https://www.linkedin.com/in/salih-samed-av%C5%9Far-b86b35225" target='_blank' rel='noreferrer'>
                    <AiFillLinkedin className='text-[4rem] max-lg:text-[3rem] max-sm:text-[2.3rem]'/>
                </a>
            </div>

        </div>
    </div>
  )
}

export default ContactSection