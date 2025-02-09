import React from 'react'
import { motion }from 'framer-motion'
const Certifications = () => {
  return (
    <div className='pb-4'>
    <motion.h1 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:1.5}}
     className=' my-20 text-4xl text-center text-stone-800'>Certifications & Achievements</motion.h1>
    <div className=" mb-8 flex flex-wrap justify-center">
        <div className='w-full pb-10'>
            <motion.h1  whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className='text-center text-lg pb-5 lg:text-2xl text-stone-700'> Full Stack Web development certificate| GUVI(ZenClass)</motion.h1>
            <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                 className='text-stone-500 text-sm lg:text-lg text-center'>Completed the Full Stack Web Development course at GUVI (Zenclass), gaining hands-on experience in building scalable web applications using the MERN stack. Skilled in front-end and back-end development, API integration, authentication, and deployment, with a strong focus on writing clean and efficient code.

</motion.div>
        </div>
        <div className='w-full pb-10'>
            <motion.h1  whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                 className='text-center text-lg pb-5 lg:text-2xl text-stone-700'> Mentor | Computer Science | The New College (2022-2023)</motion.h1>
            <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                 className='text-stone-500 text-sm lg:text-lg text-center'>Guided and supported students in their academic and
                                                                            professional development.
                                                                            <br />
                                                                            Organized and conducted mentoring sessions and
                                                                            workshops.
                                                                            <br />
                                                                            Provided feedback and advice on academic projects and
                                                                            career planning. 

</motion.div>
        </div>

        <div className='w-full '>
            <motion.h1 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
             className='text-center text-lg pb-5 lg:text-2xl text-stone-700'> Sports Director | CRC | The New College (2022-2022).</motion.h1>
            <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className='text-stone-500 text-sm lg:text-lg text-center'>Led and managed the sports activities and events of the CRC Club.<br/>
                                                                             Coordinated with team members to plan and execute sports events.<br/>
                                                                             Promoted sports and physical activities among club members.

</motion.div>
        </div>

    </div>
</div>
  )
}

export default Certifications