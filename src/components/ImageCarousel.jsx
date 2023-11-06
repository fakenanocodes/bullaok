import '../CSS/main.css';

import { useState } from 'react';

const slides = ['slide1', 'Slide 2', 'Slide 3', 'Slide 4'];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <div className="w-full h-24 flex items-center justify-center text-4xl font-bold">
          <div
            className={`slide-container animate-slide-${
              currentSlide === 0 ? 'right' : 'left'
            }`}
          >
            {slides[currentSlide]}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded-full"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
