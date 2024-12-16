import React from 'react'

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-8 px-6">
    {/* Background Video */}
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/videos/Hero0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  
    {/* Content */}
    <div className="relative container mx-auto text-center z-10 px-4">
      <h1 className="sm:text-5xl text-3xl font-baloo text-gold-500 mb-4 animate__animated animate__fadeIn">
        Welcome to GymBro
      </h1>
      
     
    </div>
  </section>
  )
}

export default Hero
