import React from 'react'
import {FaLinkedin,FaGithub,FaKaggle,FaFacebook} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-3xl ml-3 font-bold text-blue-500'>Porfolio</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-5 text-2xl text-blue-500'>
            <FaGithub/>
            <FaLinkedin/>
            <FaKaggle/>
            <FaFacebook/>
        </div>
    </nav>
  )
}

export default Navbar
