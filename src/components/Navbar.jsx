import React, { useEffect, useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const {t} = useTranslation();

  const moveToward = (position)=>{

    window.scrollTo(0,position);

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
    <div className='text-gray-50 flex gap-3 justify-end p-3 fixed w-full top-0 items-center h-[7vh] z-10'>

      <div className='flex gap-3 items-center'>
        <div className={`cursor-pointer ${highlight===0?"text-orange-500":""}`} onClick={()=>moveToward(0)}><AiFillHome className='text-xl'/></div>
        <div className={`cursor-pointer ${highlight===1?"text-orange-500":""}`} onClick={()=>moveToward(window.innerHeight)}>{t("Navbar_1")}</div>
        <div className={`cursor-pointer ${highlight===2?"text-orange-500":""}`} onClick={()=>moveToward(2*window.innerHeight)}>{t("Navbar_2")}</div>
        <div className={`cursor-pointer ${highlight===3?"text-orange-500":""}`} onClick={()=>moveToward(3*window.innerHeight)}>{t("Navbar_3")}</div>
        <div className={`cursor-pointer ${highlight===4?"text-orange-500":""}`} onClick={()=>moveToward(4*window.innerHeight)}>{t("Navbar_4")}</div>
      </div>

    </div>
  )
}

export default Navbar