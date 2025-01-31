import React from "react";
import aboutMeImage from '../assets/k.png'; 
import myimage from '../assets/myimage.jpg'
const skills = [
  { name: "HTML & CSS", level: "10/12" },
  { name: "Tailwind CSS", level: "11/12" },
  { name: "React JS", level: "10/12" },
  { name: "Python", level: "11/12" },
  { name: "Django", level: "11/12" },
  { name: "Django Rest Frameworks", level: "11/12" },
  { name: "Databases (MySQL, PostgreSQL, MongoDB)", level: "11/12" },
];

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={aboutMeImage} 
            alt="Portrait of Kidus Shimelis"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hi, I'm Kidus Shimelis, a backend-focused full-stack developer and telegram bot developer. I specialize in creating efficient backend systems, dynamic web applications, and intelligent bots. Passionate about clean code and innovation, I thrive on solving complex problems and building impactful solutions. Let’s bring ideas to life!
            </p>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div className="flex items-center" key={index}>
                  <label htmlFor={`skill-${index}`} className="w-4/12">
                    {skill.name}
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105`}
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">2+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">23+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">9+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
