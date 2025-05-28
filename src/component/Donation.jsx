import React from 'react';

const Donation = () => {
  return (
    <section id="donate" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img 
              src="https://images.pexels.com/photos/5998240/pexels-photo-5998240.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Temple donation" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 bg-amber-800 text-white p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Your generous contributions help us maintain our sacred projects and extend our reach to more souls in need of spiritual guidance and support.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Every donation, regardless of size, makes a significant impact on our ability to preserve and share ancient wisdom in modern times.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <a 
                href="#" 
                className="block text-center px-8 py-3 bg-white text-amber-800 font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-amber-100"
              >
                Donate Now
              </a>
              <a 
                href="#" 
                className="block text-center px-8 py-3 border-2 border-white text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-amber-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;