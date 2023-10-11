import React from 'react'
import { useTranslation } from 'react-i18next'
import {AiOutlineMail, AiFillPhone, AiFillLinkedin } from 'react-icons/ai'

const ContactSection = () => {
    
    const{t}=useTranslation();
  return (
    <div className='h-screen w-full px-20'>
        <div className='h-[6rem] text-[4rem]'>{t("Iletisim")}</div>
        <div className='h-[calc(100vh-6rem)] flex flex-col justify-center items-center'>
            <div className='flex items-center gap-5 w-[50%]'>
                <AiFillPhone className='text-[4rem]'/>
                <p className='text-[3rem]'>+90 553 575 20 36</p>
            </div>
            <div className='flex items-center gap-5 w-[50%]'>
                <AiOutlineMail className='text-[4rem]'/>
                <p className='text-[3rem]'>salihsamedavsar@gmail.com</p>
            </div>
            <div className='w-[50%]'>
                <a href="https://www.linkedin.com/in/salih-samed-av%C5%9Far-b86b35225" target='_blank'>
                    <AiFillLinkedin className='text-[4rem]'/>
                </a>
            </div>

        </div>
    </div>
  )
}

export default ContactSection