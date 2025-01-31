import React from 'react';
import aboutMeImage from '../assets/k.png'; 
import myimage from '../assets/myimage.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
        src={aboutMeImage} 
        alt="About Me"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          KIDUS SHIMELIS
        </span>
        , Creative Developer
      </h1>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
        Designing with purpose, developing with passion.
      </span>
      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
         <a href="https://www.linkedin.com/in/kidus-shimelis-6bbab0299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Contact With Me</a>
        </button>
        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
         <a href="https://flowcv.com/resume/ar2w4sllrw">Resume</a> 
        </button>
      </div>
    </div>
  );
}

export default Hero;
