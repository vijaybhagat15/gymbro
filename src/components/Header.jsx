/* eslint-disable no-lone-blocks */
import { Link, useNavigate } from 'react-router-dom'; 
import {
  FaHome,
  FaBoxOpen,
  FaTimes,
  FaCartPlus,
  FaBars,
  FaUserCircle,
  FaHeart,
  FaBlog,
  FaCog,
  FaPhoneAlt,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const isActive = (path) => window.location.pathname === path;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmation = window.confirm('Are you sure you want to log out?');
    if (confirmation) {
      localStorage.removeItem('auth');
      alert('You have been logged out');
      navigate('/');
    }
  };

  return (
    <header className="bg-custom-beige text-white sticky top-0 z-50 font-sans">
      <div className="container mx-auto flex items-center sm:justify-between py-1 sm:px-6 px-3">
        <div id="auth" className="space-x-2 flex items-center justify-around px-1">
          <button
            className="md:hidden bg-orange-500 lg:text-base text-[12px] text-white py-1 px-2 rounded-md font-sans"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="rounded-3xl px-3 mr-auto">
          <div className="sm:text-3xl text-xl pr-3 text-orange-500">GymBro</div>
        </Link>

        {/* Navigation Links for Desktop and Larger Screens */}
        <nav className="hidden md:flex space-x-6 text-orange-500 font-sans mx-auto text-sm lg:text-lg">
          <Link
            to="/"
            className={`hover:text-sunset-orange ${isActive('/') ? 'text-orange-700 font-bold' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-sunset-orange ${isActive('/products') ? 'text-orange-700 font-bold' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className={`hover:text-sunset-orange ${isActive('/blog') ? 'text-orange-700 font-bold' : ''}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`hover:text-sunset-orange ${isActive('/contact') ? 'text-orange-700 font-bold' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Icons Section for Desktop and Larger Screens */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated && (
            <Link
              to="/login"
              className="relative group flex items-center justify-center w-20 h-10 bg-orange-500 text-white rounded-lg hover:bg-sunset-orange transition-all font-sans"
            >
              <FaSignInAlt className="transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              <span className="absolute text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Login
              </span>
            </Link>
          )}

          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <Link
                to="/cart"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/cart') ? 'text-orange-700 font-bold' : ''}`}
              >
                <FaCartPlus className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Cart</div>
              </Link>

              <Link
                to="/wishlist"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/wishlist') ? 'text-orange-700 font-bold' : ''}`}
              >
                <FaHeart className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Wishlist</div>
              </Link>

              <Link
                to="/profile"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/profile') ? 'text-orange-700 font-bold' : ''}`}
              >
                <FaUserCircle className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Profile</div>
              </Link>

              <Link
                to="/forgot-password"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/forgot-password') ? 'text-orange-700 font-bold' : ''}`}
              >
                <FaCog className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Settings</div>
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Links for Mobile (visible on small screens) */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="bg-gray-100 w-3/4 md:w-1/3 fixed top-0 left-0 h-full shadow-lg rounded-r-lg text-orange-500">
              {/* Header Section */}
              <div className="flex justify-between items-center px-4 py-2 bg-custom-beige">
                <span className="font-semibold uppercase">Menu</span>
                <button
                  className="hover:text-orange-700 text-xl"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-1 mt-1">
                <Link
                  to="/"
                  className={`flex justify-between items-center px-4 py-2 rounded-lg ${
                    isActive('/') ? 'bg-orange-100 text-orange-700' : 'hover:text-orange-700 hover:bg-orange-50'
                  }`}
                >
                  <span className="text-base font-semibold flex gap-2">
                    <FaHome size={24} />
                    Home
                  </span>
                  <span className="text-lg">{'>'}</span>
                </Link>

                <Link
                  to="/products"
                  className={`flex justify-between items-center px-4 py-2 rounded-lg ${
                    isActive('/products') ? 'bg-orange-100 text-orange-700' : 'hover:text-orange-700 hover:bg-orange-50'
                  }`}
                >
                  <span className="text-base font-semibold flex gap-2">
                    <FaBoxOpen size={24} />
                    Shop
                  </span>
                  <span className="text-lg">{'>'}</span>
                </Link>

                <Link
                  to="/blog"
                  className={`flex justify-between items-center px-4 py-2 rounded-lg ${
                    isActive('/blog') ? 'bg-orange-100 text-orange-700' : 'hover:text-orange-700 hover:bg-orange-50'
                  }`}
                >
                  <span className="text-base font-semibold flex gap-2">
                    <FaBlog size={24} />
                    Blogs
                  </span>
                  <span className="text-lg">{'>'}</span>
                </Link>

                <Link
                  to="/contact"
                  className={`flex justify-between items-center px-4 py-2 rounded-lg ${
                    isActive('/contact') ? 'bg-orange-100 text-orange-700' : 'hover:text-orange-700 hover:bg-orange-50'
                  }`}
                >
                  <span className="text-base font-semibold flex gap-2">
                    <FaPhoneAlt size={24} />
                    Contact
                  </span>
                  <span className="text-lg">{'>'}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
