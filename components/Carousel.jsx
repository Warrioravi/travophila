'use client'
// components/Carousel.js
import { useState } from 'react';

const images = [
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
];

export default function Carousel({ isOpen, onClose , images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 z-50`}>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-[80vw] h-[80vh] max-w-4xl mx-auto">
          <div className="overflow-hidden relative h-full">
            <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &lt;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          &gt;
        </button>
        <button onClick={onClose} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          &#x2715;
        </button>
      </div>
    </div>
  );
}
