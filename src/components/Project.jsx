import React from 'react'

const Project = ({projectName,techs,image,linkName,siteLink,githubLink,githubLink2}) => {
  return (
    <div className='w-[40%] mx-auto mt-5'>
                <h3><span className='font-semibold'>Proje:</span>{projectName}</h3>
                <h4 className='mb-2'><span className='font-semibold'>Kullanılan teknolojiler ve araçlar:</span>{techs}</h4>
                <img src={image} title={projectName} alt={projectName} />
                <div className='text-center mt-4'>
                    <span>Site bağlantısı:</span>
                    <a href={siteLink} className='underline text-blue-600 hover:text-blue-800 visited:text-blue-800' target='_blank'>{linkName}</a>
                </div>
                <div className='text-center mt-4'>
                    <span>GitHub bağlantısı{githubLink2!==undefined && " (Client)"}:</span>
                    <a href={githubLink} className='underline text-blue-600 hover:text-blue-800 visited:text-blue-800' target='_blank'>GitHub</a>
                </div>
                {githubLink2!==undefined &&
                <div className='text-center mt-4'>
                    <span>GitHub bağlantısı (Server):</span>
                    <a href={githubLink2} className='underline text-blue-600 hover:text-blue-800 visited:text-blue-800' target='_blank'>GitHub</a>
                </div>
                }
                
    </div>
  )
}

export default Project