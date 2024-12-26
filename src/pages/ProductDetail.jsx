import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function ProductDetail() {
  const { id } = useParams(); // Get product ID from URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details by ID
  useEffect(() => {
    const foundProduct = products.find((product) => product.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null); // Handle invalid ID
    }
    setLoading(false);
  }, [id]);

  // Initialize cart state with data from localStorage (if available)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Initialize wishlist state with data from localStorage (if available)
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
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

  // Check if the product is in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === product?.id);

  // Handle adding/removing product from the wishlist
  const toggleWishlist = (product) => {
    if (isInWishlist) {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.id !== product.id)
      );
      alert(`${product.name} removed from wishlist.`);
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      alert(`${product.name} added to wishlist.`);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-lg font-sans">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center py-12 text-lg text-red-500 font-sans">Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 bg-custom-beige rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full bg-white p-4 rounded-3xl shadow-lg relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-3xl transition-transform transform hover:scale-105"
          />
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform text-red-500 hover:text-red-600"
          >
            {isInWishlist ? <FaHeart size={24} /> : <FaRegHeart size={15} />}
          </button>
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-xl font-serif font-semibold text-orange-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed font-sans">{product.description}</p>

          {/* Product Specifications */}
          <div className="mb-6">
            <h2 className="text-lg font-serif font-semibold text-gray-800 mb-2">Specifications</h2>
            <ul className="list-disc pl-6 text-gray-600 font-sans">
              {product.specifications && product.specifications.length > 0 ? (
                product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
              ) : (
                <li>No specifications available</li>
              )}
            </ul>
          </div>

          {/* Product Details */}
          <div className="mb-6">
            <h2 className="text-lg font-serif font-semibold text-gray-800 mb-2">Details</h2>
            <p className="text-gray-600 font-sans">{product.details || 'No additional details available'}</p>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="text-lg font-serif font-semibold text-gray-800 mb-2">Shipping Information</h2>
            <p className="text-gray-600 font-sans">{product.shipping || 'No shipping information available'}</p>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-auto">
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 w-full sm:w-auto font-sans"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
