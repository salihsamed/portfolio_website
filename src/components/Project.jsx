import React from 'react'
import { useTranslation } from 'react-i18next'

const Project = ({projectName,techs,image,linkName,siteLink,githubLink,githubLink2}) => {

  const {t}=useTranslation();
  return (
    <div className='col-span-1 border-orange-500 border py-3 px-6 rounded-md hover:-translate-y-5 transition-all duration-300'>
                
                <h3 className='mt-2 mb-2 text-2xl'><span className='font-semibold'>{t("Proje")}:&nbsp;</span>{projectName}</h3>
                <h4 className='mb-5 text-lg'><span className='font-semibold'>{t("Kullanilan")}:&nbsp;</span>{techs}</h4>
                <img src={image} title={projectName} alt={projectName} />
                <div className='text-center mt-4'>
                    <span>{t("Site_baglantisi")}:&nbsp;</span>
                    <a href={siteLink} className='underline text-orange-500 hover:text-orange-500 visited:text-orange-500' target='_blank' rel='noreferrer'>{linkName}</a>
                </div>
                <div className='text-center mt-4'>
                    <span>{t("Github_baglantisi")}{githubLink2!==undefined && " (Client)"}:&nbsp;</span>
                    <a href={githubLink} className='underline text-orange-500 hover:text-orange-500 visited:text-orange-500' target='_blank' rel='noreferrer'>GitHub</a>
                </div>
                {githubLink2!==undefined &&
                <div className='text-center mt-4'>
                    <span>GitHub bağlantısı (Server):&nbsp;</span>
                    <a href={githubLink2} className='underline text-orange-500 hover:text-orange-500 visited:text-orange-500' target='_blank' rel='noreferrer'>GitHub</a>
                </div>
                }
    </div>
  )
}

export default Project