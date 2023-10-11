import React from 'react'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css-3.png'
import jsIcon from '../assets/js.png'
import nodeIcon from '../assets/nodejs.png'
import reactIcon from '../assets/atom.png'
import firebaseIcon from '../assets/firebase.png'
import mongodbIcon from '../assets/mongodb.png'
import tailwindIcon from '../assets/tailwind.png'
import Ability from '../components/Ability';
import expressIcon from '../assets/express.png'
import { useTranslation } from 'react-i18next'



const AbilitySection = () => {

    const {t}=useTranslation();

    const abilities=[
        {   image:htmlIcon,
            text:"HTML"   
        },
        {
            image:cssIcon,
            text:"CSS"
        },
        {
            image:jsIcon,
            text:"JS"
        },
        {
            image:nodeIcon,
            text:"Node.js"
        },
        {
            image:reactIcon,
            text:"React.js"
        },
        {
            image:firebaseIcon,
            text:"Firebase"
        },
        {
            image:mongodbIcon,
            text:"MongoDB"
        },
        {
            image:tailwindIcon,
            text:"TailwindCSS"
        },
        {
            image:expressIcon,
            text:"Express.js"
        }
    ]

  return (
    <div className='h-screen w-full px-20'>
        <div className='text-[4rem]'>{t("Yetenekler")}</div>
        <div className='grid grid-cols-5 mt-2 gap-10'>
            {abilities.map((a,index)=>(<Ability key={index} image={a.image} text={a.text}/>))}
        </div>
    </div>
  )
}

export default AbilitySection