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
    <header className="bg-custom-beige text-white sticky top-0 z-50 "  >
      <div className="container mx-auto flex items-center justify-between py-1 px-6">
        {/* Logo */}
        <Link to="/" className='hover:bg-sunset-orange rounded-3xl'  >
        <img src="\imeges\logo.png" alt="" className="sm:h-20 sm:w-20 h-10 w-10 flex-col text-center text-sunset-orange font-baloo  rounded-sm text-xs"  />
        {/* <div className='text-xs sm:text-base  text-sunset-orange font-baloo'>Gym Bro</div> */}
        </Link>

        {/* Navigation Links for Desktop and Larger Screens */}
        <nav className="hidden md:flex space-x-6 text-orange-500  font-baloo text-xl">
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
          <div className="relative group flex items-center justify-center text-white w-20 h-10 bg-red-500  rounded-lg hover:bg-sunset-orange transition-all"
>
            <button
              onClick={handleLogout}
              className="absolute text-lg font-medium opacity-0 group-hover:opacity-100  transition-opacity duration-200"            >
Logout 
            </button>
            </div>
          )}

          {/* Cart Icon */}
          <Link to="/cart" className="relative group flex items-center justify-center p-2 text-2xl bg-slate-200 rounded-full hover:bg-sunset-orange transition-all">
            🛒
          </Link>
          {/* Profile Icon */}
          <Link to="/Profile" className="relative group flex items-center justify-center p-2 text-2xl  bg-slate-200 rounded-full hover:bg-sunset-orange transition-all">
            👤
          </Link>
          <Link to="/forgot-password" className="relative group flex items-center justify-center p-2 text-2xl text-gray-700  bg-slate-200 rounded-full hover:bg-sunset-orange transition-all">
          <FaCog />
          </Link>
        </div>
              {/* Navigation Links for Mobile (visible on small screens) */}
      <div className="md:hidden flex justify-between py-4 text-base">
        <Link to="/" className=" text-orange-500 p-1 hover:text-orange-400">
          <FaHome />
        </Link>
        <Link to="/products" className=" text-orange-500 p-1 hover:text-orange-400">
          <FaBoxOpen />
        </Link>
        <Link to="/blog" className="l text-orange-500 p-1 hover:text-orange-400">
          <FaBlog />
        </Link>
        <Link to="/contact" className=" text-orange-500 hover:text-orange-400 p-1">
          <FaPhoneAlt />
        </Link>

        {/* Show Login, SignUp, or Logout based on authentication */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className=" text-orange-500 p-1 hover:text-orange-400"
          >
            <FaSignOutAlt />
          </button>
        ) : (
          <>
            <Link to="/login" className=" p-1 text-orange-500 hover:text-orange-400">
              <FaSignInAlt />
            </Link>
            <Link to="/SignUp" className=" p-1 text-orange-500 hover:text-orange-400">
              <FaUserPlus />
            </Link>
            <Link to="/cart"className=" p-1 text-orange-500 hover:text-orange-400">
            <FaCartPlus/>
          </Link>
          {/* Profile Icon */}
          <Link to="/Profile" className=" p-1 text-orange-500 hover:text-orange-400">
          <FaUserCircle/>
          </Link>
          <Link to="/forgot-password" className=" p-1 text-orange-500 hover:text-orange-400">
          <FaCog />
          </Link>
          </>
          
        )}
      </div>
      </div>


    </header>
  );
}
