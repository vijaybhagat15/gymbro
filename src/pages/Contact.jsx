import React from "react"; 
import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 font-sans">
      <div className="w-full lg:w-1/2 max-w-md mb-8 lg:mb-0 lg:mr-12">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6 border-2 border-gray-200 hover:border-orange-500 transition-colors">
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-orange-500 mr-4 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800 font-serif">Call to Us</h2>
          </div>
          <p className="text-gray-600 mb-2 font-sans">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-orange-500 font-semibold font-sans">
            Phone: +1 234 567 890
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-orange-500 mr-4 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800 font-serif">Email Us</h2>
          </div>
          <p className="text-gray-600 mb-2 font-sans">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-orange-500 font-semibold font-sans">
            customer@gymbro.com
          </p>
          <p className="text-orange-500 font-semibold font-sans">
            support@gymbro.com
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-md">
        <div className="bg-white shadow-xl rounded-lg p-8 border-2 border-gray-200 hover:border-orange-500 transition-colors">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 font-serif">
            Contact Us
          </h1>

          <form className="space-y-4">
            <div>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-300 focus:ring-orange-500 font-sans"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-300 focus:ring-orange-500 font-sans"
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 border-gray-300 focus:ring-orange-500 font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold transition-all duration-300 flex items-center justify-center bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 font-sans"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
