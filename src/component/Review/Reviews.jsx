import React, { useState, useEffect, useRef } from 'react';
import ReviewCard from './ReviewCard';

const reviewsData = [
  {
    id: 1,
    name: "Aarav Patel",
    location: "Mumbai, India",
    text: "Visiting SrilaAshram was a life-changing experience. The peaceful environment and the wisdom shared by the gurus helped me find inner peace and purpose.",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Delhi, India",
    text: "The Gosala project at SrilaAshram is truly inspiring. I learned so much about the importance of cow protection and sustainable living. Will definitely visit again!",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    name: "Michael Thompson",
    location: "London, UK",
    text: "I traveled all the way from London to experience the authentic Vedic lifestyle at SrilaAshram. The meditation sessions and the science lab visit were enlightening.",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "California, USA",
    text: "The organic farming techniques taught at Khet are amazing! I've implemented many of these practices back home and the results are incredible. Thank you for sharing this wisdom.",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    location: "Bangalore, India",
    text: "The Vedic Hospital at SrilaAshram combines the best of ancient healing with modern medicine. My health improved significantly after following their personalized treatment plan.",
    imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = reviewsData.length - 1;
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
        scrollToReview(newIndex);
        return newIndex;
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, [maxIndex]);

  const scrollToReview = (index) => {
    if (scrollContainerRef.current) {
      const reviewWidth = scrollContainerRef.current.querySelector('div')?.clientWidth || 0;
      const margin = 16; // Equivalent to mx-4
      scrollContainerRef.current.scrollTo({
        left: index * (reviewWidth + margin),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="py-16 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">
          What Our Visitors Say
        </h2>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-smooth py-4"
        >
          {reviewsData.map(review => (
            <ReviewCard 
              key={review.id}
              name={review.name}
              location={review.location}
              text={review.text}
              imageUrl={review.imageUrl}
            />
          ))}
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToReview(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-amber-600 w-6' : 'bg-amber-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;