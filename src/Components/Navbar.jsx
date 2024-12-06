import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo / Website Name */}
        <div className="text-2xl font-bold">
          <NavLink to="/">🎥 Movie Portal</NavLink>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-purple-400">
            Home
          </NavLink>
          <NavLink to="/movies" className="hover:text-purple-400">
            All Movies
          </NavLink>
          <NavLink to="/add-movie" className="hover:text-purple-400">
            Add Movie
          </NavLink>
          <NavLink to="/favorites" className="hover:text-purple-400">
            My Favorites
          </NavLink>
          <NavLink to="/public-route" className="hover:text-purple-400">
            Public Route
          </NavLink>
        </div>

        {/* Authentication Buttons (Hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-4">
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
        </div>

        {/* Hamburger Menu Button (Visible on small screens) */}
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
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
            to="/movies"
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
            to="/favorites"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            My Favorites
          </NavLink>
          <NavLink
            to="/public-route"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Public Route
          </NavLink>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
