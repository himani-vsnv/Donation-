import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 max-w-4xl leading-tight">
          Hare Krishna Everyone
        </h1>
        <p className="text-xl md:text-2xl text-white font-light max-w-2xl mb-8 leading-relaxed">
          "In the silence of the heart, God speaks. Listen for God's voice in everything, in every person, in every circumstance."
        </p>
        <a 
          href="#projects" 
          className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Work
        </a>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,197.3C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;