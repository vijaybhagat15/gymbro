import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { products } from '../data/products'; // Imported products data

export default function Productdetailswishlist() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    // Fetch the product from the imported `products` object
    const fetchProduct = () => {
      const foundProduct = products.find((item) => item.id === parseInt(id));
      setProduct(foundProduct || null); // Handle invalid IDs gracefully
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const isInWishlist = wishlist.some((item) => item.id === product?.id);

  const toggleWishlist = () => {
    if (!product) return; // Prevent action if product is null
    if (isInWishlist) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      alert(`${product.name} removed from wishlist.`);
    } else {
      setWishlist((prev) => [...prev, product]);
      alert(`${product.name} added to wishlist.`);
    }
  };

  const handleAddToCart = () => {
    if (!product) return; // Prevent action if product is null
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

  if (!product) {
    return (
      <div className="text-center py-12 text-lg text-red-500 font-sans">
        {id ? 'Product not found!' : 'Loading...'}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 bg-custom-beige rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full bg-white p-4 rounded-3xl shadow-lg relative">
          <img
            src={product.image || '/placeholder-image.jpg'}
            alt={product.name || 'Product image not available'}
            className="w-full h-auto object-cover rounded-3xl transition-transform transform hover:scale-105"
          />
          <button
            onClick={toggleWishlist}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform text-red-500 hover:text-red-600"
          >
            {isInWishlist ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </button>
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 font-serif">
            {product.name}
          </h1>
          <p className="text-xl font-semibold text-orange-600 mb-4 font-sans">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed font-sans">
            {product.description}
          </p>

          {/* Product Specifications */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 font-serif">Specifications</h2>
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
            <h2 className="text-lg font-semibold text-gray-800 mb-2 font-serif">Details</h2>
            <p className="text-gray-600 font-sans">
              {product.details || 'No additional details available'}
            </p>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 font-serif">Shipping Information</h2>
            <p className="text-gray-600 font-sans">
              {product.shipping || 'No shipping information available'}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
