import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from '../Providers/DarkModeProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logout handler
  const handleLogout = async () => {
    try {
      await logOut(); // Call logOut function from AuthContext
      navigate('/'); // Redirect to home after logout
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  // Debugging: Log the user state on change
  useEffect(() => {
    console.log('Current User:', user);
  }, [user]);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/">🎥 Movie Portal</NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-purple-400">
            Home
          </NavLink>
          <NavLink to="/all-movies" className="hover:text-purple-400">
            All Movies
          </NavLink>
          <NavLink to="/add-movie" className="hover:text-purple-400">
            Add Movie
          </NavLink>
          <NavLink to="/favourite" className="hover:text-purple-400">
            My Favorites
          </NavLink>
          <NavLink to="/aboutus" className="hover:text-purple-400">
            About Us
          </NavLink>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/40'}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-400"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-gray-700 text-sm rounded-md py-1 px-2 hidden group-hover:block text-center">
                  {user.displayName || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
              >
                Register
              </button>
            </>
          )}
          <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <MdOutlineDarkMode size={24} />
        </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <NavLink
            to="/"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-movies"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            All Movies
          </NavLink>
          <NavLink
            to="/add-movie"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Add Movie
          </NavLink>
          <NavLink
            to="/favourite"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            My Favorites
          </NavLink>
          <NavLink
            to="/aboutus"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="block w-full text-left px-4 py-2 bg-red-500 hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate('/login');
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-2 bg-purple-500 hover:bg-purple-600"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate('/register');
                  toggleMenu();
                }}
                className="block w-full text-left px-4 py-2 bg-green-500 hover:bg-green-600"
              >
                Register
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
