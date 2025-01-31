import React, { useState } from 'react'
import nameIcon from '../assets/favicon-32x32.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <a href="#home"><img src={nameIcon} alt="kidus" /></a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400 transition-colors duration-300'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition-colors duration-300'>About Me</a>
          <a href="#service" className='hover:text-gray-400 transition-colors duration-300'>Services</a>
          <a href="#project" className='hover:text-gray-400 transition-colors duration-300'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition-colors duration-300'>Contact</a>
          <a href="https://t.me/code_it_now" className='hover:text-gray-400 transition-colors duration-300'>Blog</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href="https://www.linkedin.com/in/kidus-shimelis-6bbab0299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Connect Me</a>
        </button>
      </div>
      {isOpen && (
        <div className='md:hidden flex justify-end'>
          <div className='space-y-2 px-2 pt-2 pb-3'>
            <a href="#home" className='block hover:text-gray-400 transition-colors duration-300'>Home</a>
            <a href="#about" className='block hover:text-gray-400 transition-colors duration-300'>About Me</a>
            <a href="#service" className='block hover:text-gray-400 transition-colors duration-300'>Services</a>
            <a href="#project" className='block hover:text-gray-400 transition-colors duration-300'>Projects</a>
            <a href="#contact" className='block hover:text-gray-400 transition-colors duration-300'>Contact</a>
            <a href="https://t.me/code_it_now" className='block hover:text-gray-400 transition-colors duration-300'>Blog</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar