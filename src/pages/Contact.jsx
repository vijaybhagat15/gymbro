import { useState } from 'react';

const FormField = ({ label, id, value, onChange, required, type = 'text', rows = 1 }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
        rows={rows}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
      />
    )}
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="container mx-auto py-2 px-6 bg-gradient-to-br from-orange-50 font-baloo to-orange-200">
      <div className="flex flex-wrap justify-center gap-4 rounded-3xl mb-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-3 pt-3 m-auto">
          <div className="bg-custom-beige rounded-3xl text-center p-3 px-12">
            Contact Us
          </div>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto justify-center items-center">
        {/* Contact Form */}
        <div className="lg:w-1/3 sm:w-full shadow-lg bg-orange-50 rounded-lg p-4 border-4 border-orange-200">
          <h2 className="text-lg  mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <FormField
              label="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormField
              label="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
            />
            <FormField
              label="Subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <FormField
              label="Message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              type="textarea"
              rows={1}  
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:w-1/3 sm:w-full bg-orange-50 shadow-lg rounded-lg p-4 border-4 border-orange-200">
          <h2 className="text-lg  mb-4">Contact Information</h2>
          <p className="mb-4 text-gray-600 text-base">
            Have questions or need help? Reach out to us through the form or contact us via:
          </p>
          <ul className='text-base'>
            <li className="mb-3">
              <strong className="text-blue-600">Phone:</strong> (123) 456-7890
            </li>
            <li className="mb-3">
              <strong className="text-blue-600">Email:</strong> support@gymbro.com
            </li>
            <li className="mb-3">
              <strong className="text-blue-600">Address:</strong> 123 Fitness St, Healthy City, 12345
            </li>
            <li className="mb-3">
              <strong className="text-blue-600">What We Do :</strong > We are your Gym Brow. <br />We help you to Achieve your fitness goals with Gym bro! Explore top-quality supplements and connect with expert trainers who are ready to guide ance. with Gym bro! Explore top-quality supplements and connect with expert trainers who are ready to guide you on your journey to peak performance.

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
