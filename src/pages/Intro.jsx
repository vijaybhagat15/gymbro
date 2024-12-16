import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of image sources
  const images = [
    "https://pngimg.com/uploads/bodybuilding/bodybuilding_PNG96.png", // Image 1
    "https://www.pngplay.com/wp-content/uploads/15/Bodybuilder-Download-Free-PNG.png", // Image 2
   
  ];

  // Use effect to change images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Loop through the images
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-br from-orange-50 to-orange-200 font-baloo px-10 md:px-20">
      {/* Left Section: Text Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-800 px-8">
          {/* Tagline */}
          <p className="text-orange-500 font-bold text-xl">Gym Brow</p>
          
          {/* Main Heading */}
          <h1 className="sm:text-5xl text-2xl font-extrabold mt-2 font-zenDots text-gray-900">
            GET EXCLUSIVE<br />GYM GUIDANCE
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Achieve your fitness goals with Gym bro! Explore top-quality supplements and connect with expert trainers who are ready to guide you on your journey to peak performance.
          </p>

          {/* Button */}
          <Link
            to="/products"
            className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 inline-block text-center"
          >
            EXPLORE NOW
          </Link>
        </div>
      </div>

      {/* Right Section: Image Slider */}
      <div className="hidden md:flex justify-center items-center">
        <div className="relative w-full max-w-md h-auto">
          <img
            src={images[currentImage]}
            alt="Bodybuilder"
            className="w-full h-auto object-contain transition-opacity duration-1000 ease-in-out opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
