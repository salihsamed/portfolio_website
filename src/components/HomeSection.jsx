import React from 'react'
import Typewriter from 'typewriter-effect';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import Modes from './Modes';
import { useTranslation } from 'react-i18next';
import bgVideo from '../assets/bg_video.mp4'



const HomeSection = () => {

    const {t} = useTranslation();

    const scrollToSecondPage = () =>{

        window.scrollTo(0,window.innerHeight)
    }

  return (
    <div className='h-screen w-full px-20 flex flex-col justify-center items-center relative'>
        <div className='w-[70%] flex flex-col justify-center'>
            <p className='text-orange-500 text-[5rem]'>{t("Home_p1")}</p>
            <p className='text-[6rem]'>{t("Home_p2")}</p>
            <Typewriter
                options={{
                strings: ['Full-Stack Developer', 'Front-End Developer','React.js Developer','Node.js Developer'],
                autoStart: true,
                loop: true,
                wrapperClassName:"text-[2rem]",
                cursorClassName:"text-[2rem]"
                }}
            />
            <div className='flex gap-3 mt-5'>
                <a href="https://github.com/salihsamed" target='_blank' rel='noreferrer'><AiFillGithub className='text-white text-[3rem]'/></a>
                <a href="https://www.linkedin.com/in/salih-samed-av%C5%9Far-b86b35225" target='_blank' rel='noreferrer'><AiFillLinkedin className='text-white text-[3rem]'/></a>
            </div>
        </div>
        <IoIosArrowDropdownCircle className='absolute top-[90vh] text-[3rem] left-0 right-0 my-0 mx-auto hover:text-gray-400 cursor-pointer transition-all' onClick={scrollToSecondPage}/>
        <Modes/>
        <video className='absolute -z-10 top-0 left-0 w-full h-screen object-fill videoBackground' autoPlay muted loop>
            <source src={bgVideo} type='video/mp4' />
        </video>
    </div>
  )
}

export default HomeSection