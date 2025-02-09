import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import {motion} from "framer-motion"

const iconVariants=(duration)=>({
  initial:{ y:-10 },
  animate :{
    y: [10,-10],
    transition:{
       duration:duration,
       ease:"linear",
       repeat:Infinity,
       repeatType:"reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}  
      className='text-4xl text-center my-20 text-stone-700'>Technologies</motion.h1>
       <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className='text-stone-600 pt-4 flex text-5xl gap-10 justify-center items-center flex-wrap'>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
            <FaHtml5 />
            <p className='text-sm'>HTML</p>
        </motion.div>
        <motion.div   
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <FaCss3Alt />
        <p className='text-sm'>CSS</p>
        </motion.div   >
        <motion.div  initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <IoLogoJavascript />
        <p className='text-sm'>JavaScript</p>
        </motion.div >
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}>
        <FaReact />
        <p className='text-sm'>ReactJS</p>
        </motion.div>
        <motion.div  
           initial="initial"
           animate="animate"
           variants={iconVariants(2.5)}>
        <IoLogoNodejs />
        <p className='text-lg'>NodeJS</p>
        </motion.div>
        <motion.div  initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <SiMongodb />
        <p className='text-sm'>MongoDB</p>
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}>
        <FaBootstrap />
        <p className='text-sm'>BootStrap</p>
        </motion.div>
        <motion.div  
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <FiFigma />
        <p className='text-sm'>Figma</p>
        </motion.div>
        <motion.div  initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <SiExpress />
        <p className='text-sm'>ExpressJs</p>
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}>
        <TbBrandMysql />
        <p className='text-sm'>MySql</p>
        </motion.div >
        
        <motion.div   initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <IoLogoFirebase />
        <p className='text-sm'>Firebasw</p>
        </motion.div>
        <motion.div   initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <SiPostman />
        <p className='text-sm'>PostMan</p>
        </motion.div>
        <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(2.5)}>
        <SiRedux />
        <p className='text-sm'>Redux</p>
        </motion.div>
        <motion.div  initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <FaGithubSquare />
        <p className='text-sm'>GitHub</p>
        </motion.div>
        <motion.div   initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
        <FaGitAlt />
        <p className='text-sm'>Git</p>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies