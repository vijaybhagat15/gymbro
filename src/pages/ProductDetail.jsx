import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';

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

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  if (loading) {
    return <div className="text-center py-12 text-lg">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center py-12 text-lg text-red-500">Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 lg:px-12 font-baloo">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 bg-custom-beige rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Product Image with white-50 background */}
        <div className="lg:w-1/2 w-full bg-white  p-4 rounded-3xl shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-3xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">{product.description}</p>

          {/* Product Specifications */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h2>
            <ul className="list-disc pl-6 text-gray-600">
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
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Details</h2>
            <p className="text-gray-600">{product.details || 'No additional details available'}</p>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Shipping Information</h2>
            <p className="text-gray-600">{product.shipping || 'No shipping information available'}</p>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-auto">
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 w-full sm:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
