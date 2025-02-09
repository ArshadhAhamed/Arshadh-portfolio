import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/image-Photoroom.png"


const Navbar = () => {
  return (
    <nav className=' flex justify-between py-2 items-center'>
        <div className=' flex items-center'>
            <a href='' aria-label='home' ><img className="h-20 w-20 "src={logo}></img></a>
         </div>
         <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://www.linkedin.com/in/arshadh-ahamed/ ' className=' text-stone-600 hover:text-blue-800' target='_blank'><FaLinkedin /></a>
          <a href='https://github.com/ArshadhAhamed'  className='text-stone-600 hover:text-stone-800' target='_blank'><FaGithub /></a>
          <a href='https://x.com/arshadh_In_X'target='_blank' className=' text-stone-600 hover:text-stone-800' ><FaSquareXTwitter /></a>
          <a href='https://www.instagram.com/arshadh_ahamed/'className='text-stone-600 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' target='_blank'><FaInstagram /></a>


         </div>
    </nav>
  )
}   

export default Navbar