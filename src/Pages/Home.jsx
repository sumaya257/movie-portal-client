import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import FeaturedMovies from '../Components/FeaturedMovie';
import TrendingNow from '../Components/TrendingNow';
import UpcomingMovies from '../Components/UpcomingMovies';

const Home = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <header className="p-4 flex justify-end items-center bg-gray-200 dark:bg-gray-800">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-gray-900"
                >
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </header>

            <div className="p-6">
                <h2 className="text-xl font-semibold">Welcome to {theme === 'light' ? 'Light' : 'Dark'} Mode!</h2>
                <p>
                    You are currently in {theme === 'light' ? 'a bright and clear' : 'a dark and cozy'} interface.
                </p>
            </div>

            <div>
                <Banner theme={theme} />
            </div>

            <div>
                <FeaturedMovies theme={theme} />
            </div>

            <div>
                <TrendingNow theme={theme} />
            </div>

            <div>
                <UpcomingMovies theme={theme} />
            </div>
        </div>
    );
};

export default Home;
