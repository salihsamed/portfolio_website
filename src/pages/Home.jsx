import React from 'react'
import image from '../assets/samet.jpg'
import {AiFillGithub} from 'react-icons/ai'
import Typewriter from 'typewriter-effect';
import {GrMail} from 'react-icons/gr'
import {AiFillPhone} from 'react-icons/ai'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css-3.png'
import jsIcon from '../assets/js.png'
import nodeIcon from '../assets/nodejs.png'
import reactIcon from '../assets/atom.png'
import firebaseIcon from '../assets/firebase.png'
import mongodbIcon from '../assets/mongodb.png'
import ecommerceImage from '../assets/e-commerce.png'


const Home = () => {


  return (
    <div className='p-5'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <img src={image} alt="" className='pp h-[23vh] w-auto' />
                <div className='pl-2'>
                    <h1 className='text-[2.5rem]'>Salih Samed Avşar</h1>
                    <Typewriter
                        options={{
                        strings: ['Full-Stack Developer', 'Front-End Developer','React.js Developer','Node.js Developer'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                    <div className='flex items-center gap-2 mt-2'>
                        <AiFillPhone className='text-xl'/>
                        <span>0553 575 20 36</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <GrMail className='text-xl'/>
                        <span>salihsamedavsar@gmail.com</span>
                    </div>
                    <a href="https://github.com/salihsamed" target='_blank' sr className='mt-2 block'><AiFillGithub className='text-3xl'/></a>
                    
                </div>
            </div>
            
            <p className='text-center mt-5'>Salih Samed Avşar, 23 yaşındayım, Adana doğumluyum.<br/>İskenderun Teknik Üniversitesi Elektrik-Elektronik Mühendisliği'nden 2023 yılında 3.17 not ortalaması ile mezun oldum.<br/>Yazılıma olan ilgimle beraber üniversite yıllarında kendimi geliştirdim.<br/>Üniversitemin son dönemimde Çukurova Teknokent'de bulunan <a href="https://www.2adam.com.tr/" target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-blue-800'>2 Adam Yazılım ve Teknoloji</a> firmasında Full-Stack Developer olarak stajımı yaptım.<br/>Staj boyunca bir fiil şirketinin geliştirdiği yazılım projesinde rol aldım.<br/>Bunun yanı sıra farklı teknolojiler kullarak birçok proje geliştirdim.</p>
            <h2 className='text-xl mt-5 font-semibold mb-2'>Yetenekler</h2>
            <div className='flex gap-3 mt-2'>
                <div className='flex flex-col items-center gap-1'>
                    <img src={htmlIcon} title='HTML' className='h-10 w-10'/>
                    <span>HTML</span>
                </div>
                <div className='flex flex-col  items-center gap-1'>
                    <img src={cssIcon} title='CSS' className='h-10 w-10'/>
                    <span>CSS</span>
                </div>
                <div className='flex flex-col  items-center gap-1'>
                    <img src={jsIcon} title='Javascript' className='h-10 w-10'/>    
                    <span>Javascript</span>
                </div>
                <div className='flex flex-col  items-center gap-1'>
                    <img src={nodeIcon} title='Node.js' className='h-10 w-10'/>   
                    <span>Node.js</span>
                </div>
                <div className='flex flex-col  items-center gap-1'>
                    <img src={reactIcon} title='React.js' className='h-10 w-10'/>   
                    <span>React.js</span>
                </div>
                <div className='flex flex-col  items-center gap-1'>
                    <img src={firebaseIcon} title='Firebase' className='h-10 w-10'/>   
                    <span>Firebase</span>
                </div>
                <div className='flex flex-col  items-center gap-1'>
                    <img src={mongodbIcon} title='MongoDB' className='h-10 w-10'/>   
                    <span>MongoDB</span>
                </div>   
            </div>
            <h2 className='text-xl mt-5 font-semibold'>Projeler</h2>
            <div className='w-[40%] mx-auto mt-5'>
                <h3><span className='font-semibold'>Proje:</span>E-Ticaret Sitesi</h3>
                <h4 className='mb-2'><span className='font-semibold'>Kullanılan Teknolojiler:</span>React.js, Redux Toolkit</h4>
                <img src={ecommerceImage} title='E-ticaret sitesi' />
                <div className='text-center mt-4'>
                    <span>Site bağlantısı:</span>
                    <a href='https://singular-wisp-93a631.netlify.app/' className='underline text-blue-600 hover:text-blue-800 visited:text-blue-800' target='_blank'>E-ticaret</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home