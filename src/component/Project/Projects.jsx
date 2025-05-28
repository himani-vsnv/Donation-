import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Gosala',
    description: 'Our cow sanctuary where we care for and protect cows according to Vedic principles, promoting sustainable dairy practices.',
    imageUrl: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 2,
    title: 'Science Lab',
    description: 'Exploring the harmony between modern science and ancient wisdom through research and educational programs.',
    imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 3,
    title: 'Aanangrah',
    description: 'Food distribution program serving nutritious prasadam meals to those in need, spreading love and compassion.',
    imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 4,
    title: 'Khet',
    description: 'Organic farming initiative teaching sustainable agriculture methods based on traditional principles.',
    imageUrl: 'https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 5,
    title: 'Vedic Hospital',
    description: 'Holistic healthcare combining modern medicine with traditional Ayurvedic practices for complete healing.',
    imageUrl: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projectsData.length - 3;
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
        
        // Smooth scroll to the new position
        if (scrollContainerRef.current) {
          const cardWidth = scrollContainerRef.current.querySelector('div')?.clientWidth || 0;
          const margin = 16; // Equivalent to mx-4
          scrollContainerRef.current.scrollTo({
            left: newIndex * (cardWidth + margin),
            behavior: 'smooth'
          });
        }
        
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [maxIndex]);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(prevIndex => {
        const newIndex = Math.max(0, prevIndex - 1);
        scrollToCard(newIndex);
        return newIndex;
      });
    } else {
      setCurrentIndex(prevIndex => {
        const newIndex = Math.min(maxIndex, prevIndex + 1);
        scrollToCard(newIndex);
        return newIndex;
      });
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('div')?.clientWidth || 0;
      const margin = 16; // Equivalent to mx-4
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + margin),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">
          Our Sacred Projects
        </h2>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={() => handleScroll('prev')}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-amber-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth py-4"
          >
            {projectsData.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          
          <button 
            onClick={() => handleScroll('next')}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md ${
              currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-amber-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-amber-600 w-6' : 'bg-amber-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;