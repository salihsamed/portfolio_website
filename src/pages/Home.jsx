import React from 'react'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import AbilitySection from '../components/AbilitySection'
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';


const Home = () => {

  return (
        <div className='text-gray-100'>
            <HomeSection/>
            <AboutSection/>
            <AbilitySection/>
            <ProjectSection/>
            <ContactSection/>
        </div> 
  )
}

export default Home