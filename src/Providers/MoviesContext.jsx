import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const MoviesContext = createContext();

// Custom hook to use MoviesContext
export const useMovies = () => {
  return useContext(MoviesContext);
};

// Context Provider component
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // Set the movies data, and persist it to localStorage
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies)); // Store in localStorage
  };

  // On initial load, check if movies are in localStorage
  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies)); // Load from localStorage
    } else {
      // Fetch and update if no movies in localStorage
      fetch('/api/movies') // Replace with your API call
        .then((response) => response.json())
        .then((data) => {
          updateMovies(data);
        });
    }
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, updateMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
