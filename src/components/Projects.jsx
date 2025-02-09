import React from 'react'
import Movieapp from '../assets/movieApp.webp'
import sociopedia from '../assets/sociopedia.webp'
import Mycrudapp from '../assets/Mycrudapp.webp'
import StuTeaManagement from '../assets/student_teacher_image.webp'
import MentorStudentAssignmentSystem from '../assets/Mentor-Student Assignment System.webp'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}} 
          className='my-20 text-center text-4xl text-stone-600'>Projects</motion.h2>
     <div className='flex flex-wrap  lg:justify-center pb-4 gap-7'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        
        className='w-full max-w-xl lg:w-3/4' >
        <img src={Movieapp} alt='project 1'></img>
        </motion.div>
        <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
          className='w-full max-w-full lg:w-1/4'>
          <div className='mb-2 font-semibold text-2xl text-stone-600'>
          Movie Ticket Application
          </div>
          <div className='mb-4 text-stone-500'>
          This full-stack **MERN** Movie Booking website offers a seamless ticket booking experience with user authentication, admin controls, and multi-user roles. Users can browse movies, select showtimes, and book tickets effortlessly, while admins manage movies, schedules, and bookings. Built with **MongoDB, Express, React, and Node.js**, it ensures a smooth and responsive interface. With secure authentication and role-based access, the platform provides a dynamic and efficient movie ticketing system. 
        </div>

     </motion.div>
    </div>
    <div className='flex flex-wrap  lg:justify-center  pb-4 gap-7 '>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
         className='w-full  max-w-xl lg:w-3/4'>
        <img src={sociopedia} alt='project 1'></img>
        </motion.div>
        <motion.div  
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full max-w-full lg:w-1/4'>
          <div className='mb-2 font-semibold text-2xl  text-stone-700'>
            SOCIOPEDIA
          </div>
          <div className='mb-4 text-stone-500'>
          Sociopedia is a full-stack MERN social media application designed for seamless user interaction. It features authentication, post creation, likes, and a responsive dark mode for an enhanced user experience. Built with React, MongoDB, and MUI, it ensures a modern and visually appealing interface. Users can engage with posts, manage profiles, and explore content effortlessly. With a secure backend and a dynamic frontend, Sociopedia delivers a complete social networking experience.
        </div>

     </motion.div>
    </div>
    <div className='flex flex-wrap  lg:justify-center pb-4 gap-7'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full max-w-xl lg:w-3/4'>
        <img src={Mycrudapp} alt='project 1'></img>
        </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
          className='w-full max-w-full lg:w-1/4'>
          <div className='mb-2 font-semibold text-2xl  text-stone-700'>
          UserFlow
          </div>
          <div className='mb-4 text-stone-500'>
          UserFlow is a modern, intuitive dashboard designed to streamline user management. Built with React.js, it enables seamless CRUD (Create, Read, Update, Delete) operations for user profiles. Features include a user list, profile views, and forms for creating and editing user details.
        </div>

     </motion.div>
    </div>
    <div className='flex flex-wrap  lg:justify-center pb-4 gap-7'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full max-w-xl lg:w-3/4'>
        <img src={StuTeaManagement} alt='project 1'></img>
        </motion.div>
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
         className='w-full max-w-full lg:w-1/4'>
          <div className='mb-2 font-semibold text-2xl  text-stone-700'>
          STUDENT & TEACHER MANAGEMENT
          </div>
          <div className='mb-4 text-stone-500'>
          This Admin Dashboard is designed to efficiently manage students and teachers with full CRUD (Create, Read, Update, Delete) functionalities. It provides an intuitive and structured interface for educational institutions, allowing administrators to streamline student and teacher management effortlessly.
        </div>

     </motion.div>
    </div>
    <div className='flex flex-wrap  lg:justify-center pb-4 gap-7'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
         className='w-full max-w-xl lg:w-3/4'>
        <img src={MentorStudentAssignmentSystem} alt='project 1'></img>
        </motion.div>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:1}}
          className='w-full max-w-full lg:w-1/4'>
          <div className='mb-2 font-semibold text-2xl  text-stone-700'>
          Mentor-Student Assignment System
          </div>
          <div className='mb-4 text-stone-500'>
           
           APIs to create mentors and students.
           Assign multiple students to a mentor while ensuring students with mentors are excluded from the list.
           Reassign or change mentors for students.
           View all students under a mentor and check previous mentor history.
           Uses Node.js & MongoDB for backend storage and management.
        </div>

     </motion.div>
    </div>
    </div>
    
  )
}

export default Projects