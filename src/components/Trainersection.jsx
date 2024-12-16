import React from 'react'

function Trainersection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gold-500 mb-8">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Trainer 1 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <img src="/images/trainer1.jpg" alt="Trainer 1" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-400">Certified personal trainer with 5 years of experience in strength training.</p>
          </div>
          {/* Trainer 2 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <img src="/images/trainer2.jpg" alt="Trainer 2" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-400">Specialized in yoga and flexibility training to improve mobility.</p>
          </div>
          {/* Trainer 3 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <img src="/images/trainer3.jpg" alt="Trainer 3" className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mark Lee</h3>
            <p className="text-gray-400">Certified nutritionist and strength training expert.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainersection
