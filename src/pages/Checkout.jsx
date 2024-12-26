import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [isPaymentProcessed, setIsPaymentProcessed] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Fetching cart data from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally here you would send the order data to your backend.
    alert('Your order has been placed!');

    // Clear the cart after successful checkout
    localStorage.removeItem('cart');
    setIsPaymentProcessed(true);

    // Redirect to the home page or order confirmation page
    setTimeout(() => {
      navigate('/'); // Use navigate() instead of history.push()
    }, 2000);
  };

  return (
    <div className="container mx-auto py-12 px-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-serif">Your Cart</h2>
        <div className="border rounded-lg p-4">
          {cart.length === 0 ? (
            <p className="font-sans">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold font-serif">{item.name}</h3>
                  <p className="font-sans">Quantity: {item.quantity}</p>
                </div>
                <p className="font-sans">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
          <div className="flex justify-between font-semibold mt-4">
            <p className="font-sans">Total:</p>
            <p className="font-sans">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Shipping Form */}
      {!isPaymentProcessed && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-sans">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 font-sans">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 font-sans">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700 font-sans"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-sans">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
          >
            Place Order
          </button>
        </form>
      )}

      {/* Confirmation Message after Payment */}
      {isPaymentProcessed && (
        <div className="text-center mt-8">
          <p className="text-xl font-semibold text-green-600 font-serif">
            Thank you for your purchase!
          </p>
          <p className="font-sans">Your order is being processed.</p>
        </div>
      )}
    </div>
  );
}
