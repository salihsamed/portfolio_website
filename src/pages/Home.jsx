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
import Project from '../components/Project';
import tailwindIcon from '../assets/tailwind.png'
import Ability from '../components/Ability';
import expressIcon from '../assets/express.png'
import recipesZ from '../assets/recipez.png'


const Home = () => {

    const projects =[
        {   projectName:"E-Ticaret Sitesi",
            techs:"React.js, Redux Toolkit, TailwindCSS",
            linkName:"Shop Z",
            image:ecommerceImage,
            siteLink:"https://shop-z.netlify.app/",
            githubLink:"https://github.com/salihsamed/e-commerce_portfolio",
        },
        {   projectName:"Yemek Tarifi Sitesi",
            techs:"MongoDB, Express.js, React.js, Node.js, TailwindCSS",
            linkName:"Recipes Z",
            image:recipesZ,
            siteLink:"https://recipes-z.netlify.app/",
            githubLink:"https://github.com/salihsamed/recipe_app_portfolio",
            githubLink2:"https://github.com/salihsamed/NODEJS-API-FOR-MERN-STACK"
        }
        
    ]

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
    <div className='p-5'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center'>
                <img src={image} alt="profilePicture" className='pp h-[23vh] w-auto' />
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
                    <a href="https://github.com/salihsamed" target='_blank' className='mt-2 block'><AiFillGithub className='text-3xl'/></a>
                    
                </div>
            </div>
            
            <p className='text-center mt-5'>Salih Samed Avşar, 23 yaşındayım, Adana doğumluyum.<br/>İskenderun Teknik Üniversitesi Elektrik-Elektronik Mühendisliği'nden 2023 yılında 3.17 not ortalaması ile mezun oldum.<br/>Yazılıma olan ilgimle beraber üniversite yıllarında kendimi geliştirdim.<br/>Üniversitemin son dönemimde Çukurova Teknokent'de bulunan <a href="https://www.2adam.com.tr/" target='_blank' className='underline text-blue-600 hover:text-blue-800 visited:text-blue-800'>2 Adam Yazılım ve Teknoloji</a> firmasında Full-Stack Developer olarak stajımı yaptım.<br/>Staj boyunca bir fiil şirketinin geliştirdiği yazılım projesinde rol aldım.<br/>Bunun yanı sıra farklı teknolojiler kullarak birçok proje geliştirdim.</p>
            <h2 className='text-xl mt-5 font-semibold mb-2'>Yetenekler</h2>
            <div className='flex gap-3 mt-2'>
                {abilities.map((a,index)=>(<Ability key={index} image={a.image} text={a.text}/>))}
            </div>
            <h2 className='text-xl mt-5 font-semibold'>Projeler</h2>
            {projects.map((p,index)=>(<Project key={index} projectName={p.projectName} techs={p.techs} linkName={p.linkName}  image={p.image} siteLink={p.siteLink} githubLink={p.githubLink} githubLink2={p.githubLink2}/>))}
        </div>
    </div>
  )
}

export default Home