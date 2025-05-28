import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar  = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-900/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white font-serif text-xl md:text-2xl font-bold">
              SrilaAshram
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-amber-200 transition-colors duration-200">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-amber-200 transition-colors duration-200">
              Projects
            </a>
            <a href="#donate" className="text-white hover:text-amber-200 transition-colors duration-200">
              Donate
            </a>
            <a href="#reviews" className="text-white hover:text-amber-200 transition-colors duration-200">
              Reviews
            </a>
            <a href="#contact" className="text-white hover:text-amber-200 transition-colors duration-200">
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-900/95 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-white font-medium hover:bg-amber-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-white font-medium hover:bg-amber-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#donate"
              className="block px-3 py-2 text-white font-medium hover:bg-amber-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
            <a
              href="#reviews"
              className="block px-3 py-2 text-white font-medium hover:bg-amber-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white font-medium hover:bg-amber-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;