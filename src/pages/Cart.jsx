import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

export default function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ price: '', category: '', rating: '' });
  const navigate = useNavigate();

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate('/checkout');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredCart = cart.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = filters.price
      ? (() => {
          const [min, max] = filters.price.split('-').map(Number);
          return item.price >= min && item.price <= max;
        })()
      : true;
    const matchesCategory = filters.category ? item.category === filters.category : true;
    const matchesRating = filters.rating ? item.rating >= parseFloat(filters.rating) : true;
    return matchesSearch && matchesPrice && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen py-4 px-6 bg-gradient-to-br from-orange-50 to-orange-200 font-baloo" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="flex flex-wrap sm:justify-center gap-4bg-custom-beige rounded-3xl mb-8">
        <h1 className="text-xl  text-white mb-3 pt-3 ml-10 mr-auto">
        <div className="font-baloo text-orange-500 sm:mb-0 pl-4 sm:pt-3">
        Your Cart 🛒
          </div>
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products...🔎"
          className="px-4 py-2 rounded-3xl my-2 border-4 hover:border-custom-orange border-gray-200 min-w-40 sm:w-auto"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Price Filter */}
        <select
          name="price"
          className="px-4 py-2 rounded-3xl my-2 border-4 hover:border-custom-orange border-gray-200"
          onChange={handleFilterChange}
        >
          <option value="">All Prices</option>
          <option value="0-20">$0 - $20</option>
          <option value="20-50">$20 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">$100 - $500</option>
        </select>

        {/* Category Filter */}
        <select
          name="category"
          className="px-4 py-2 rounded-3xl my-2 border-4 hover:border-custom-orange border-gray-200"
          onChange={handleFilterChange}
        >
          <option value="">All Categories</option>
          {[...new Set(cart.map((item) => item.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Rating Filter */}
        <select
          name="rating"
          className="px-4 py-2 rounded-3xl my-2 border-4 hover:border-custom-orange border-gray-200"
          onChange={handleFilterChange}
        >
          <option value="">All Ratings</option>
          <option value="4.0">4 Stars & Up</option>
          <option value="4.5">4.5 Stars & Up</option>
          <option value="5.0">5 Stars Only</option>
        </select>
      </div>

      {filteredCart.length > 0 ? (
        <div className="grid gap-8">
          {filteredCart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center border-2 hover:border-custom-orange border-gray-300 justify-between bg-white shadow-lg rounded-lg p-6"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                />
                <div>
                  <h2 className="sm:text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <button
                  className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                >
                  <FaMinus />
                </button>
                <span className="sm:text-xl font-medium">{item.quantity}</span>
                <button
                  className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                >
                  <FaPlus />
                </button>
                <button
                  className="text-red-500 p-2 rounded-full hover:bg-red-100"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="bg-white  shadow-lg border-2 hover:border-custom-orange border-gray-300 rounded-lg sm:p-8 sm:mt-8 text-center">
            <h3 className="sm:text-3xl font-bold text-gray-800 mb-4">
              Total: ${calculateTotal().toFixed(2)}
            </h3>
            <button
              className="bg-blue-600 text-white sm:px-12 px-7 sm:py-3 py-1 mb-2 rounded-full sm:text-lg font-medium hover:bg-blue-700 transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 sm:text-lg">
          Your cart is empty.
        </p>
      )}
    </div>
  );
}
