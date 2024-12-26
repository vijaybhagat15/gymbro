import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaBoxOpen,
  FaHeart,
  FaUserCircle,
  FaSignInAlt,
  FaCog,
} from 'react-icons/fa';
import { useState } from 'react';

export default function BottomLinks() {
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-custom-beige md:hidden sticky top-0 z-50 font-sans">
      <div className="container mx-auto flex justify-center py-1 px-1">
        <div className="grid grid-cols-5 sm:grid-cols-6 text-orange-500 text-center text-xs">
          {/* Home Link */}
          <Link
            to="/"
            className={`${
              isActive('/') ? 'bg-orange-100 text-orange-600 underline' : ''
            } hover:text-orange-600 flex flex-col items-center border-1 border-orange-400 p-2 hover:bg-orange-100 hover:scale-105 transition-transform`}
          >
            <FaHome size={20} />
            <span className="">Home</span>
          </Link>

          {/* Products Link */}
          <Link
            to="/products"
            className={`${
              isActive('/products') ? 'bg-orange-100 text-orange-600 underline' : ''
            } hover:text-orange-800600 flex flex-col items-center border-2 border-orange-500 p-2 px-2 hover:bg-orange-100 hover:scale-105 transition-transform`}
          >
            <FaBoxOpen size={20} />
            <span className=" px-2">Products</span>
          </Link>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className={`${
              isActive('/wishlist') ? 'bg-orange-100 text-orange-600 underline' : ''
            } hover:text-orange-600 flex flex-col items-center border-2 border-orange-500 p-2 hover:bg-orange-100 hover:scale-105 transition-transform`}
          >
            <FaHeart size={20} />
            <span className="">Wishlist</span>
          </Link>

          {/* Profile Link (if authenticated) */}
          {isAuthenticated && (
            <Link
              to="/profile"
              className={`${
                isActive('/profile') ? 'bg-orange-100 text-orange-600 underline' : ''
              } hover:text-orange-600 flex flex-col items-center border-2 border-orange-500 p-2 hover:bg-orange-100 hover:scale-105 transition-transform`}
            >
              <FaUserCircle size={20} />
              <span className="">Profile</span>
            </Link>
          )}

          {/* Login (if not authenticated) */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className={`${
                isActive('/login') ? 'bg-orange-100 text-orange-600 underline' : ''
              } hover:text-orange-600 flex flex-col items-center border-2 border-orange-500 p-2 hover:bg-orange-100 hover:scale-105 transition-transform`}
            >
              <FaSignInAlt size={20} />
              <span className="">Login</span>
            </Link>
          )}

          {/* Settings */}
          <Link
            to="/forgot-password"
            className={`${
              isActive('/forgot-password') ? 'bg-orange-100 text-orange-600 underline' : ''
            } hover:text-orange-600 flex flex-col items-center border-2 border-orange-500 p-2 hover:bg-orange-100 hover:scale-105 transition-transform`}
          >
            <FaCog size={20} />
            <span className="">Settings</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
