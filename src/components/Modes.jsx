import React from 'react'
import i18n from '../i18n'
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"

const Modes = () => {

    const currentLanguage=window.localStorage.getItem("lang");

    const changeLanguage = (inp)=>{
        window.localStorage.setItem("lang",inp);
        i18n.changeLanguage(inp)
    }



  return (  
    <div className='absolute left-2 top-2 flex p-3 gap-3 cursor-pointer z-10 items-center'>
        {currentLanguage==="tr" || currentLanguage===null?<div onClick={()=>changeLanguage("en")}>English</div>:<div onClick={()=>changeLanguage("tr")}>Türkçe</div>}
    </div>  
  )
}

export default Modes