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
<<<<<<< HEAD
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

=======
    <header className="bg-custom-beige text-white sticky top-0 z-50 font-baloo "  >
      <div className="container mx-auto flex items-center justify-between py-1 sm:px-6 px-3">
>>>>>>> 755f0e0096104cffb20d8ef662e59123d867e96c
        {/* Logo */}
        <Link to="/" className="rounded-3xl px-3 mr-auto">
          <div className="sm:text-3xl text-xl pr-3 text-orange-500">GymBro</div>
        </Link>

        {/* Navigation Links for Desktop and Larger Screens */}
<<<<<<< HEAD
        <nav className="hidden md:flex space-x-6 text-orange-500 font-sans mx-auto text-sm lg:text-lg">
          <Link
            to="/"
            className={`hover:text-sunset-orange ${isActive('/') ? 'text-orange-600 underline font-bold' : ''}`}
          >
=======
        <nav className="hidden md:flex space-x-6 text-orange-500  font-baloo text-base">
          <Link to="/" className='hover:text-sunset-orange' >
>>>>>>> 755f0e0096104cffb20d8ef662e59123d867e96c
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-sunset-orange ${isActive('/products') ? 'text-orange-600 underline font-bold' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className={`hover:text-sunset-orange ${isActive('/blog') ? 'text-orange-600 underline font-bold' : ''}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`hover:text-sunset-orange ${isActive('/contact') ? 'text-orange-600 underline font-bold' : ''}`}
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
<<<<<<< HEAD
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <Link
                to="/cart"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/cart') ? 'text-orange-600 underline font-bold' : ''}`}
              >
                <FaCartPlus className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Cart</div>
              </Link>

              <Link
                to="/wishlist"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/wishlist') ? 'text-orange-600 underline font-bold' : ''}`}
              >
                <FaHeart className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Wishlist</div>
              </Link>

              <Link
                to="/profile"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/profile') ? 'text-orange-600 underline font-bold' : ''}`}
              >
                <FaUserCircle className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Profile</div>
              </Link>

              <Link
                to="/forgot-password"
                className={`text-orange-500 text-lg hover:text-orange-400 flex flex-col items-center leading-none font-sans ${isActive('/forgot-password') ? 'text-orange-600 underline font-bold' : ''}`}
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
=======
          <div className="relative group flex items-center justify-center text-white w-20 h-6 bg-red-500  rounded-lg hover:bg-sunset-orange transition-all">
            <button
              onClick={handleLogout}
              className="absolute text-sm font-medium  opacity-65 group-hover:opacity-100  transition-opacity duration-200"            >
            Logout 
            </button>
            </div>
          )}
          {isAuthenticated && (
            <div className='hidden md:flex items-center space-x-4'>
          {/* Cart Icon */}
          <Link to="/cart" className="relative group flex items-center justify-center p-2 text-2xl bg-slate-200 rounded-full hover:bg-sunset-orange transition-all">
            🛒
          </Link >
          {/* Profile Icon */}
          <Link to="/Profile" className="relative group flex items-center justify-center p-2 text-2xl  bg-slate-200 rounded-full hover:bg-sunset-orange transition-all">
            👤
          </Link>
          <Link to="/forgot-password" className="relative group flex items-center justify-center p-2 text-2xl text-gray-700  bg-slate-200 rounded-full hover:bg-sunset-orange transition-all">
          <FaCog />
          </Link>
          </div>
          )}
        </div>
       {/* Navigation Links for Mobile (visible on small screens) */}
<div className="md:hidden flex items-center justify-around py-4 text-base space-x-6">
  <div className='space-x-2 flex items-center justify-around'>
  <Link
    to="/"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaHome />
    <div className="text-[10px] text-center m-0 p-0">Home</div>
  </Link>

  <Link
    to="/products"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaBoxOpen />
    <div className="text-[10px] text-center m-0 p-0">Products</div>
  </Link>

  <Link
    to="/blog"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaBlog />
    <div className="text-[10px] text-center m-0 p-0">Blog</div>
  </Link>

  <Link
    to="/contact"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaPhoneAlt />
    <div className="text-[10px] text-center m-0 p-0">Contact</div>
  </Link>
  </div>

  {/* Show Login, SignUp, or Logout based on authentication */}
   {/* Login Link */}
   {!isAuthenticated && (
            <div className='space-x-2 flex items-center justify-around'>
              <Link
                to="/login"
                className="relative group  justify-center w-8 h-6  text-orange-500 rounded-lg hover:bg-sunset-orange flex flex-col items-center leading-none "
              >
                <FaSignInAlt/>
                <div className="text-[10px] text-center m-0 p-0">login</div>

              </Link>

              {/* Sign Up Link */}
              <Link
                to="/SignUp"
                className="relative group flex flex-col items-center leading-none justify-center w-8 h-6  text-orange-500 rounded-lg  hover:bg-sunset-orange"
              >
                <FaUserPlus/>
                <div className="text-[10px] text-center m-0 p-0">SignUp</div>

              </Link>
            </div>
          )}

  {isAuthenticated && (
      <div className='space-x-2 flex items-center justify-around'>
  <Link
    to="/cart"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaCartPlus />
    <div className="text-[10px] text-center m-0 p-0">Cart</div>
  </Link>

  <Link
    to="/profile"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaUserCircle />
    <div className="text-[10px] text-center m-0 p-0">Profile</div>
  </Link>

  <Link
    to="/forgot-password"
    className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
  >
    <FaCog />
    <div className="text-[10px] text-center m-0 p-0">Settings</div>
  </Link>
      <button
        onClick={handleLogout}
        className="text-orange-500 hover:text-orange-400 flex flex-col items-center leading-none"
        >
        <FaSignOutAlt />
        <div className="text-[10px] text-center m-0 p-0">SignOut</div>

      </button>
    </div>
  )}
</div>

</div>


>>>>>>> 755f0e0096104cffb20d8ef662e59123d867e96c
    </header>
  );
}
