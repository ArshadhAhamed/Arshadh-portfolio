import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='pb-4'>
        <motion.h1  whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
         className=' my-20 text-4xl text-center text-stone-800'>Experience & Ongoing Projects</motion.h1>
        <div className=" mb-8 flex flex-wrap justify-center">
            <div 
                className='w-full pb-10'>
                <motion.h1
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                 className='text-center text-lg pb-5 lg:text-2xl text-stone-700'> Frontend Developer Intern | PrimeSite Innovation (3 Months)</motion.h1>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                 className='text-stone-500 text-sm lg:text-lg text-center'>Developed and maintained user-facing webpages using
                                                                    HTML, CSS, JavaScript and ReactJS<br />
                                                                    Developed reusable components that can be used in
                                                                    future projects with minimal effort.<br />
                                                                    Debugged existing code to identify and fix bugs or
                                                                    performance issues.

</motion.div>
            </div>
            <div
            className='w-full pb-10'>
                <motion.h1 whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='text-center text-lg pb-5 lg:text-2xl text-stone-700'> Freelance Web Developer | IDesignStudio Architect (Ongoing)</motion.h1>
                <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className='text-stone-500 text-sm lg:text-lg text-center'>I am currently developing a portfolio website for IDesignStudio, an architectural company, to showcase their projects, expertise, and design aesthetics. The website is being crafted with a modern, visually appealing layout, ensuring a seamless user experience while highlighting their architectural works effectively. 

</motion.div>
            </div>

            <div
                className='w-full '>
                <motion.h1  whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className='text-center text-lg pb-5 lg:text-2xl text-stone-700'> Real-time Chat App | Final Year Project (Ongoing)</motion.h1>
                <motion.div 
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:100}}
                 transition={{duration:1}}
                 className='text-stone-500 text-sm lg:text-lg text-center'>Tech Stack: MERN + Socket.io + TailwindCSS + Daisy UI <br/>
                                                                                     Features:<br/>

                                                                                     Authentication & Authorization with JWT<br/>
                                                                                     Real-time messaging with Socket.io<br/>
                                                                                     Online user status tracking<br/>
                                                                                     Global state management using Zustand<br/>
                                                                                     Error handling on both client and serve<br/>

</motion.div>
            </div>

        </div>
    </div>
  )
}

export default Experience