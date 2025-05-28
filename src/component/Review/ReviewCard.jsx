import React from 'react';



const ReviewCard = ({ name, location, text, imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-[350px] lg:w-[500px] rounded-lg overflow-hidden bg-white shadow-lg p-6 mx-4">
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-700 italic leading-relaxed">"{text}"</p>
      <div className="mt-4 flex text-amber-500">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;