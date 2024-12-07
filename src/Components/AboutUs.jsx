import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-700 to-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?cinema,movie')` }}></div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto p-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-6 drop-shadow-lg">
          About Us
        </h1>

        {/* Content Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg border border-white border-opacity-20">
          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            Welcome to <span className="text-purple-300 font-semibold">Movie Portal</span>, your ultimate destination for discovering and sharing movies. We believe in bringing the magic of cinema to life by offering a platform where movie enthusiasts can explore, review, and connect with their favorite films.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Whether you are looking for the latest blockbusters, timeless classics, or hidden gems, Movie Portal has something for everyone. Create your personalized favorites list, rate movies, and contribute by adding your favorite films to the portal!
          </p>
        </div>

        {/* Fancy Call-to-Action */}
        <div className="text-center mt-8">
          <NavLink
            to={'/all-movies'} 
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
          >
            Explore Our Movies
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
