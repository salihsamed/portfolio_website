import React from 'react'
import profilePicture from '../assets/samet.png'
import { useTranslation } from 'react-i18next';

const AboutSection = () => {

    const {t}=useTranslation();

    const moveToward = (position)=>{

        window.scrollTo(0,position);
    
    }

  return (
    <div className='h-screen w-full px-20 flex flex-col gap-56'>
        <div className='text-[4rem]'>{t("Hakkimda")}</div>
        <div className='flex gap-20'>
            <div className='flex flex-col items-center'>
                <img src={profilePicture} alt="Salih Samed" className='rounded-xl h-[30vh] w-auto' />
                <p className='text-[2rem]'>Salih Samed Avşar</p>
            </div>
            <div className='flex flex-col'>
                <p className='leading-10'>{t("About_p1")}<br/>{t("About_p2")}<br/>{t("About_p3")}<a href="https://www.2adam.com.tr/" target='_blank' className='underline text-orange-500 hover:text-orange-300 visited:text-orange-500'>{t("About_p4")}</a>{t("About_p5")}<br/>{t("About_p6")}</p>
                <div className='flex gap-5 mt-7'>
                    <button className='border border-orange-500 rounded-lg text-white text-[2rem] first-letter: px-2 hover:border-orange-300' onClick={()=>moveToward(window.innerHeight*2)}>{t("Yetenekler")}</button>
                    <button className='border border-orange-500 rounded-lg text-white text-[2rem] first-letter: px-2 hover:border-orange-300' onClick={()=>moveToward(window.innerHeight*3)}>{t("Projeler")}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection