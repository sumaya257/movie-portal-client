import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import FeaturedMovies from '../Components/FeaturedMovie';
import TrendingNow from '../Components/TrendingNow';


const Home = () => {
    // State to manage the theme
    const [theme, setTheme] = useState('light');

    // Apply saved theme preference on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme); // Apply theme to root
    }, []);

    // Function to toggle between dark and light mode
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme); // Remove current theme class
        document.documentElement.classList.add(newTheme); // Add new theme class
        localStorage.setItem('theme', newTheme); // Save preference to localStorage
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Header */}
            <header className="p-4 flex justify-end items-center bg-gray-200 dark:bg-gray-800">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-gray-900"
                >
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </header>

            {/* Content */}
            <div className="p-6">
                <h2 className="text-xl font-semibold">Welcome to {theme === 'light' ? 'Light' : 'Dark'} Mode!</h2>
                <p>
                    You are currently in {theme === 'light' ? 'a bright and clear' : 'a dark and cozy'} interface.
                </p>
            </div>
            <div className='mb-10'>
            <Banner></Banner>
            </div>
            <div className='mb-10'>
               <FeaturedMovies theme={theme}></FeaturedMovies>
            </div>
            <div className='mb-10'>
                <TrendingNow theme={theme}></TrendingNow>
            </div>
        </div>
    );
};

export default Home;
