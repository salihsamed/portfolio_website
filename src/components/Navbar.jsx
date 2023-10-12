import React, { useEffect, useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
import {IoReorderThree} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

  const [switchIcon,setSwitchIcon]=useState(false);

  

  const {t} = useTranslation();

  const moveToward = (position)=>{

    window.scrollTo(0,position);
    if(window.innerWidth<768){
      setSwitchIcon(false);
    }
  }

  const [highlight,setHighligt]=useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = ()=>{

    const position = window.scrollY;

    if(position>=0 && (position<window.innerHeight*9/10)){

        setHighligt(0);
    }

    else if((position>=window.innerHeight*9/10) && position<(window.innerHeight*2*9/10)){

      setHighligt(1);
    }

    else if(position>=(window.innerHeight*2*9/10) && position<(window.innerHeight*3*9/10)){

      setHighligt(2);
    }

    else if(position>=(window.innerHeight*3*9/10) && position<(window.innerHeight*4*9/10)){

      setHighligt(3);
    }

    else{

      setHighligt(4);
    }
  }

  return (
    <div className={`text-gray-50 flex gap-3 justify-end p-3 fixed w-full top-0 items-center h-[7vh] ${switchIcon?"z-20":""} z-10`}>

      <div className={`flex gap-3 items-center max-md:absolute top-0 left-0  max-lg:opacity-95 max-md:w-full max-md:flex-col max-md:justify-center max-sm:gap-10 max-md:h-screen max-md:transition-all ${switchIcon?"max-lg:bg-black":"max-md:translate-x-[100%]"}`}>
        <div className={`cursor-pointer ${highlight===0?"text-orange-500":""}`} onClick={()=>moveToward(0)}><AiFillHome className='text-xl max-sm:text-3xl'/></div>
        <div className={`cursor-pointer max-sm:text-3xl ${highlight===1?"text-orange-500":""}`} onClick={()=>moveToward(window.outerHeight)}>{t("Navbar_1")}</div>
        <div className={`cursor-pointer max-sm:text-3xl ${highlight===2?"text-orange-500":""}`} onClick={()=>moveToward(2*window.outerHeight)}>{t("Navbar_2")}</div>
        <div className={`cursor-pointer max-sm:text-3xl ${highlight===3?"text-orange-500":""}`} onClick={()=>moveToward(3*window.outerHeight)}>{t("Navbar_3")}</div>
        <div className={`cursor-pointer max-sm:text-3xl ${highlight===4?"text-orange-500":""}`} onClick={()=>moveToward(document.body.scrollHeight)}>{t("Navbar_4")}</div>
      </div>

      <IoReorderThree className={`absolute right-2  top-2 text-3xl md:hidden ${switchIcon?"hidden":""}`} onClick={()=>setSwitchIcon(true)}/>

      <AiOutlineClose className={`absolute right-2  top-2 text-3xl md:hidden ${switchIcon?"":"hidden"}`} onClick={()=>setSwitchIcon(false)}/>



    </div>
  )
}

export default Navbar