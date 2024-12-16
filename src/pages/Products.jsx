import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Products() {
  // Initialize cart state with data from localStorage (if available)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    price: '',
    category: '',
    rating: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if it exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new product with quantity = 1 if not in the cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Apply filters and search whenever they change
  useEffect(() => {
    let updatedProducts = products;

    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number);
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.rating) {
      updatedProducts = updatedProducts.filter(
        (product) => product.rating >= parseFloat(filters.rating)
      );
    }

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [filters, searchQuery]);

  return (
    <section className=" bg-gradient-to-br from-orange-50 to-orange-200 font-baloo">
      {/* Search and Filters Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-custom-beige rounded-3xl sm:text-base text-xs mb-8">
  <h2 className="font-baloo text-orange-500 sm:mb-0 pl-4 sm:pt-3 sm:text-2xl">
    Featured Products
  </h2>

  {/* Search Bar */}
  <input
    type="text"
    placeholder="Search products...🔎"
    className="px-4 py-2 rounded-3xl border-2 hover:border-custom-orange border-gray-300 sm:w-1/5 w-full"
    value={searchQuery}
    onChange={handleSearchChange}
  />

  {/* Price Filter */}
  <select
    name="price"
    className="px-4 py-2 rounded-3xl border-2 hover:border-custom-orange border-gray-300 sm:w-1/5 w-full"
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
    className="px-4 py-2 rounded-3xl border-2 hover:border-custom-orange border-gray-300 sm:w-1/5 w-full"
    onChange={handleFilterChange}
  >
    <option value="">All Categories</option>
    {[...new Set(products.map((product) => product.category))].map(
      (category) => (
        <option key={category} value={category}>
          {category}
        </option>
      )
    )}
  </select>

  {/* Rating Filter */}
  <select
    name="rating"
    className="px-4  py-2 rounded-3xl border-2 hover:border-custom-orange border-gray-300 sm:w-1/5 w-full"
    onChange={handleFilterChange}
  >
    <option value="">All Ratings</option>
    <option value="4.0">4 Stars & Up</option>
    <option value="4.5">4.5 Stars & Up</option>
    <option value="5.0">5 Stars Only</option>
  </select>
</div>

      <div className="container mx-auto py-2 sm:py-20  sm:px-14 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 rounded-3xl ">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white min-w-64 shadow-md rounded-3xl p-4 hover:shadow-2xl hover:scale-105 border-8 border-orange-100 hover:border-orange-400 transition-transform h-auto"
            >
              {/* Product Image */}
              <div className="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              {/* Product Price */}
              <p className="text-gray-600">${product.price.toFixed(2)}</p>

              {/* Product Description */}
              <p className="text-gray-500 text-sm mb-4">{product.description}</p>

              {/* Product Ratings */}
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(product.rating) ? (
                        <FaStar className="text-yellow-500" />
                      ) : i < product.rating ? (
                        <FaStarHalfAlt className="text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-yellow-500" />
                      )}
                    </span>
                  ))}
              </div>

              {/* Buttons Section */}
              <div className="flex justify-between items-center">
                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
                <button
                  className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-green-700 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
