import React from 'react';

import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Donation from './component/Donation';
import Projects from './component/Project/Projects';
import Reviews from './component/Review/Reviews';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Donation />
      <Reviews />
      <Footer />
    </div> 
  );
}

export default App;
