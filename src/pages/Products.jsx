import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    price: '',
    category: '',
    rating: '',
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent navigation
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product, e) => {
    e.stopPropagation(); // Prevent navigation
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist.filter((item) => item.id !== product.id);
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (productId) => {
    navigate(`/products/${productId}`);
  };

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
    <section className="min-h-screen py-4 px-3 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold font-serif text-orange-500 mb-8 text-center">Our Products</h1>
        <button
          className="lg:hidden bg-orange-500 lg:text-base ml-5 text-[12px] text-white py-1 px-2 rounded-md max-h-6"
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          Filters
        </button>
        <div
          className={`lg:flex lg:items-center lg:gap-4 text-[7px] md:text-sm ${
            isFilterVisible ? 'block' : 'hidden'
          }`}
        >
          <input
            type="text"
            placeholder="Search products...🔎"
            className="sm:px-2 sm:py-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200 sm:w-auto"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select
            name="price"
            className="sm:px-2 sm:py-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200"
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
            className="sm:px-2 sm:py-2 rounded-xl sm:my-2 border-2 hover:border-custom-beige border-gray-200"
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
            className="sm:px-2 sm:py-2 rounded-xl sm:my-2 border-2 sm:mt-auto hover:border-custom-beige border-gray-200"
            onChange={handleFilterChange}
          >
            <option value="">All Ratings</option>
            <option value="4.0">4 Stars & Up</option>
            <option value="4.5">4.5 Stars & Up</option>
            <option value="5.0">5 Stars Only</option>
          </select>
        </div>
      </div>
      <div className="container mx-1 py-2 px-4 sm:py-20 sm:px-14">
        <div className="grid text-sm grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 rounded-3xl">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white min-w-32 shadow-md rounded-3xl p-4 hover:shadow-2xl hover:scale-105 border-2 border-orange-100 hover:border-orange-400 transition-transform h-auto relative"
              onClick={() => handleCardClick(product.id)}
            >
              <div className="relative w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  className={`absolute top-1 right-1 rounded-full p-1 transition-colors ${
                    wishlist.some((item) => item.id === product.id)
                      ? 'text-red-500'
                      : 'text-gray-400'
                  }`}
                  onClick={(e) => handleAddToWishlist(product, e)}
                >
                  <FaHeart size={15} />
                </button>
              </div>
              <h3 className="mt-2 text-base font-semibold font-serif text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-xs mb-2 font-sans">{product.description}</p>
              <div className="flex items-center mb-2">
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
              <button
                className="absolute bottom-2 right-2 bg-orange-500 text-white text-[10px] font-medium px-1 py-1 rounded-lg hover:bg-white hover:text-orange-500 transition font-sans"
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
