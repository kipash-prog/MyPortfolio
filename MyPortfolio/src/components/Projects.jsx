import React from "react";

const projects = [
  {
    id: 1,
    name: "የኔታ Book Store",
    technologies: "The Yeneta Book Store API is a backend solution for managing book inventory, sales, and user interactions in an efficient online bookstore platform.",
    image: "src/assets/book.jpg",
    github: "https://github.com/kipash-prog/YenetaBookStore",
  },
  {
    id: 2,
    name: "Blog Post",
    technologies: "The Blog Post api allows users to create, edit, and delete posts. It also includes features like authentication and commenting.",
    image: "src/assets/BlogPost.jpg",
    github: "https://github.com/kipash-prog/Blog_post",
  },
  {
    id: 3,
    name: "Social Media API",
    technologies: "I built a Social Media API for user profiles, content creation, and interactions like comments and likes. It supports dynamic social engagement.",
    image: "src/assets/SocialMWdia.jpg",
    github: "https://github.com/kipash-prog/Social_media_api",
  },
  {
    id: 4,
    name: "Amharic NLP",
    technologies: "Built an simple Amharic NLP system in Python to process and analyze text from folders and websites. It supports tasks like text extraction and language understanding.",
    image: "src/assets/AmharicNLP.webp",
    github: "https://github.com/kipash-prog/AMHARIC-NATURAL-LANGUAGE-PROCESSING",
  },
  {
    id: 5,
    name: "My Bot",
    technologies: "Built a simple Telegram bot for my school to automate tasks and improve interaction. It streamlines communication and provides quick access to key information.",
    image: "src/assets/BotImage.jpg",
    github: "https://github.com/kipash-prog/My-Bot",
  },
  {
    id: 6,
    name: "My School Website",
    technologies: "A web was developed for the School of Information Science at Addis Ababa University, featuring information about the school, admission, and academic programs.",
    image: "src/assets/SIS.jpeg",
    github: "https://github.com/kipash-prog/school_informaton_science",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
