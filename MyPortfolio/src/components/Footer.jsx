import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import nameIcon from '../assets/favicon-32x32.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Kidus</h3>
            <p className="text-gray-400">
              Creative Developer based in the Ethiopia, specializing in web and
              Bot development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kidus. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            
            <a href="https://x.com/shimelis_kidus?t=AReRL_CXtwYitwOLv2orMw&s=09" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/kidus-shimelis-6bbab0299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/kipash-prog" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://t.me/Kipa_s" className="text-gray-400 hover:text-white">
            <FaTelegramPlane />
            </a>
          </div>
          <div className="flex space-x-4">
          <div className='text-2xl font-bold hidden md:inline'><a href="#home"><img src={nameIcon} alt="kidus" /></a></div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
