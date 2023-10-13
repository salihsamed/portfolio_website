import React from 'react'
import profilePicture from '../assets/samet.png'
import { useTranslation } from 'react-i18next';

const AboutSection = () => {

    const {t}=useTranslation();

    const moveToward = (position)=>{

        window.scrollTo(0,position);
    
    }

  return (
    <div className='h-screen w-full px-20 max-lg:px-0 flex flex-col gap-56 max-lg:gap-0'>
        <div className='text-[4rem] max-sm:text-[3rem] max-lg:text-center max-lg:py-2 max-lg:w-full'>{t("Hakkimda")}</div>
        <div className='flex gap-20 max-lg:flex-col max-lg:gap-0'>
            <div className='flex flex-col items-center'>
                <img src={profilePicture} alt="Salih Samed" className='rounded-xl h-[30vh] w-auto' />
                <p className='text-[2rem] max-sm:text-[1.5rem] max-lg:text-[2rem]'>Salih Samed Avşar</p>
            </div>
            <div className='flex flex-col'>
                <p className='lg:leading-10 max-sm:text-xs max-lg:text-xl text-center px-1'>{t("About_p1")}<br/>{t("About_p2")}<br/>{t("About_p3")}<a href="https://www.2adam.com.tr/" target='_blank' rel='noreferrer' className='underline text-orange-500 hover:text-orange-300 visited:text-orange-500'>{t("About_p4")}</a>{t("About_p5")}<br/>{t("About_p6")}</p>
                <div className='flex lg:gap-5 lg:mt-7 max-lg:mt-5 max-sm:mt-5 max-sm:gap-2 max-lg:gap-5 max-lg:justify-center'>
                    <button className='border border-orange-500 rounded-lg text-white lg:text-[2rem] max-lg:text-[2rem] max-sm:text-[1.5rem]  first-letter: px-2 hover:border-orange-300' onClick={()=>moveToward(window.innerHeight*2)}>{t("Yetenekler")}</button>
                    <button className='border border-orange-500 rounded-lg text-white lg:text-[2rem] max-lg:text-[2rem] max-sm:text-[1.5rem] first-letter: px-2 hover:border-orange-300' onClick={()=>moveToward(window.innerHeight*3)}>{t("Projeler")}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection