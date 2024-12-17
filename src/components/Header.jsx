import { Link, useNavigate } from 'react-router-dom'; 
import { FaHome, FaBoxOpen,FaCartPlus,FaUserCircle, FaBlog,FaCog, FaPhoneAlt, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa'; // Import icons
export default function Header() {
  const isAuthenticated = localStorage.getItem('auth'); // Check login status
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Remove the auth token from localStorage
    alert('You have been logged out');
    navigate('/'); // Redirect to homepage or login page after logout
  };

  return (
    <header className="bg-custom-beige text-white sticky top-0 z-50 font-baloo "  >
      <div className="container mx-auto flex items-center justify-between py-1 sm:px-6 px-3">
        {/* Logo */}
        <Link to="/" className='hover:bg-sunset-orange rounded-3xl'  >
        <img src="\imeges\logo.png" alt="" className="sm:h-20 sm:w-20 h-10 w-10 flex-col text-center text-sunset-orange font-baloo  rounded-sm text-xs"  />
        {/* <div className='text-xs sm:text-base  text-sunset-orange font-baloo'>Gym Bro</div> */}
        </Link>

        {/* Navigation Links for Desktop and Larger Screens */}
        <nav className="hidden md:flex space-x-6 text-orange-500  font-baloo text-base">
          <Link to="/" className='hover:text-sunset-orange' >
            Home
          </Link>
          <Link to="/products" className='hover:text-sunset-orange' >
            Products
          </Link>
          <Link to="/blog" className='hover:text-sunset-orange'>
            Blog
          </Link>
          <Link to="/contact" className='hover:text-sunset-orange'>
            Contact
          </Link>
        </nav>

        {/* Icons Section for Desktop and Larger Screens */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Login Link */}
          {!isAuthenticated && (
            <>
              <Link
                to="/login"
                className="relative group flex items-center justify-center w-20 h-10 bg-orange-500 text-white rounded-lg hover:bg-sunset-orange transition-all"
              >
                <FaSignInAlt
                  className="transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                />
                <span className="absolute text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Login
                </span>
              </Link>

              {/* Sign Up Link */}
              <Link
                to="/SignUp"
                className="relative group flex items-center justify-center w-20 h-10 bg-orange-500 text-white rounded-lg hover:bg-sunset-orange transition-all"
              >
                <FaUserPlus
                  className="transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                />
                <span className="absolute text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Sign Up
                </span>
              </Link>
            </>
          )}

          {/* Logout Button */}
          {isAuthenticated && (
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


    </header>
  );
}
