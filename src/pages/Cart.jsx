import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

export default function Cart() {
  const calculateTaxes = () => {
    const taxRate = 0.1; // 10% tax rate
    return calculateTotal() * taxRate;
  };

  const calculateCouponDiscount = () => {
    const couponDiscount = 15; // Flat $15 discount
    return cart.length > 0 ? couponDiscount : 0;
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);

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

  const calculateSavings = () =>
    cart.reduce((savings, item) => savings + (item.discount || 0) * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
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
    <div className="min-h-screen py-6 px-4 bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center font-serif">
          Your Cart
        </h1>
        <button
          className="lg:hidden bg-orange-500 lg:text-base mb-2 mr-0 text-[12px] text-white py-1 px-2 rounded-md max-h-6"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          Filters
        </button>

        <div
          className={` grid grid-cols-2  md:flex lg:items-center lg:gap-4 text-xs md:text-sm mx-1 py-2 px-4 sm:py-20 sm:px-14 gap-1 ${
            isFilterVisible ? 'block' : 'hidden'
          }`}
         >
          <input
            type="text"
            placeholder="Search products...🔎"
            className="px-2  sm:py-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200 sm:w-auto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select
            name="price"
            className="px-2 sm:py-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200"
            onChange={handleFilterChange}
          >
            <option value="">All Prices</option>
            <option value="0-20">$0 - $20</option>
            <option value="20-50">$20 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-500">$100 - $500</option>
          </select>
          <select
            name="category"
            className="px-2 sm:py-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200"
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            {[...new Set(cart.map((item) => item.category))].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            name="rating"
            className="px-2 sm:py-2 rounded-xl sm:my-2 border-2 sm:mt-auto hover:border-custom-beige border-gray-200"
            onChange={handleFilterChange}
          >
            <option value="">All Ratings</option>
            <option value="4.0">4 Stars & Up</option>
            <option value="4.5">4.5 Stars & Up</option>
            <option value="5.0">5 Stars Only</option>
          </select>
        </div>

        {/* Cart Items */}
        {filteredCart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {filteredCart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="text-center sm:text-left">
                      <h2 className="text-base md:text-lg font-bold text-gray-800 font-serif">{item.name}</h2>
                      <p className="text-sm md:text-base text-gray-600 font-sans">
                        ${item.price.toFixed(2)}
                      </p>
                      {item.outOfStock && (
                        <p className="text-red-500 font-semibold">Out of Stock</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                    <button
                      className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.outOfStock}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      disabled={item.outOfStock}
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
            </div>

            {/* Price Details */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-serif">
                Price Details
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600 font-sans">
                  <span>Price ({cart.length} items)</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-sans">
                  <span>Discount</span>
                  <span className="text-green-500">-${calculateSavings().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-sans">
                  <span>Coupon Discount</span>
                  <span className="text-green-500">-${calculateCouponDiscount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-sans">
                  <span>Taxes (10%)</span>
                  <span>+${calculateTaxes().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-sans">
                  <span>Delivery Charges</span>
                  <span className="text-green-500">Free</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-gray-800 font-semibold font-serif">
                  <span>Total Amount</span>
                  <span>
                    $
                    {(
                      calculateTotal() -
                      calculateSavings() -
                      calculateCouponDiscount() +
                      calculateTaxes()
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition w-full"
                  onClick={handleCheckout}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 font-sans">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
