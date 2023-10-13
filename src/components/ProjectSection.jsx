import React from 'react'
import ecommerceImage from '../assets/e-commerce.png'
import Project from '../components/Project';
import recipesZ from '../assets/recipez.png'
import socialzIcon from '../assets/social_media_app.png'
import { useTranslation } from 'react-i18next';

const ProjectSection = () => {

  const {t}=useTranslation();

  const projects =[
    {   projectName:t("Project_1_name"),
        techs:"React.js, Redux Toolkit, TailwindCSS",
        linkName:"Shop Z",
        image:ecommerceImage,
        siteLink:"https://shop-z.netlify.app/",
        githubLink:"https://github.com/salihsamed/e-commerce_portfolio",
    },
    {   projectName:t("Project_2_name"),
        techs:"MongoDB, Express.js, React.js, Node.js, TailwindCSS, JSON WEB Tokens",
        linkName:"Recipes Z",
        image:recipesZ,
        siteLink:"https://recipes-z.netlify.app/",
        githubLink:"https://github.com/salihsamed/recipe_app_portfolio",
        githubLink2:"https://github.com/salihsamed/NODEJS-API-FOR-MERN-STACK"
    },
    {   projectName:t("Project_3_name"),
        techs:"React.js, Context API, Firebase",
        linkName:"Social Z",
        image:socialzIcon,
        siteLink:"Eklenecek",
        githubLink:"Eklenecek"
    }
    
]


  return (
    <div className='h-screen max-sm:h-[100svh] max-xl:h-auto w-full max-sm:mb-20 px-20 max-sm:px-2'>
        <div className='text-[4rem] max-sm:text-center max-sm:text-[3rem]'>{t("Projeler")}</div>
        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-20 max-lg:gap-10 max-sm:gap-3 mt-24 max-xl:mb-48 max-sm:mt-2'>
          {projects.map((p,index)=>(<Project key={index} projectName={p.projectName} techs={p.techs} linkName={p.linkName}  image={p.image} siteLink={p.siteLink} githubLink={p.githubLink} githubLink2={p.githubLink2}/>))}
        </div>
    </div>
  )
}

export default ProjectSection