import React from 'react';


const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg mx-2 md:mx-4 bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div 
        className="h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-amber-800 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-block text-amber-600 hover:text-amber-800 font-medium transition-colors duration-200"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;