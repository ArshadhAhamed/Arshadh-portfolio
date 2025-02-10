import React from 'react';
import profile from '../assets/last.png'; // Adjust the path as necessary
import resume from  '../assets/arshadhsresume.pdf';
import {motion} from "framer-motion"

const containerVarients={
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5
    }
  }
}

const childVarients={  
  hidden :{opacity:0,x:-100},
  visible:{  opacity:1,x:0,transition:{ duration:0.5  }}
}

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:p-8'>
                    <motion.img src={profile} alt="profile image" className='border border-stone-800 rounded-3xl h-100 w-120'
                     initial={{x:100,opacity:0}}
                     animate={{x:0,opacity:1}}
                     transition={{duration:1,delay:1.5}}/>
                </div> 
            </div>
            <div className='w-full lg:w-1/2'>
            <motion.div 
           
            initial='hidden'
            animate="visible"
            variants={containerVarients}
            className='flex flex-col items-center  lg:items-start mt-7'>
              <motion.h2  variants={childVarients}  className='pb-1 text-4xl tracking-tighter bg-gradient-to-l from-stone-400 to-stone-800 bg-clip-text  text-transparent lg:text-6xl'>Arshadh Ahamed</motion.h2>
              <motion.span variants={childVarients} className=' text-xl tracking-tight sm:text-3xl text-stone-700'>Full Stack Web Developer</motion.span>
              <motion.p variants={childVarients} className='my-2 max-w-lg py-6  leading-relaxed
              tracking-tigher text-stone-600'>Hi, I'm a passionate Full-Stack Developer with expertise in building scalable and responsive web applications. I currently pursuing Master’s in Computer Applications (MCA) from Measi Institute of Information Technology .

               With hands-on experience in MERN stack, Next.js, React.js, and Node.js, I specialize in creating clean, efficient, and user-friendly applications. My journey includes working on task management systems, authentication flows, API development, and UI/UX enhancements.</motion.p>
              <motion.a variants={childVarients} href={resume} className='text-stone-700 hover:text-red-500 ' download  >Download Resume </motion.a>
            </motion.div>

            </div>
        </div>
    </div>
  )
}

export default Hero;
