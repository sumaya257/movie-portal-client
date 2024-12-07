import React from 'react';
import { useMovies } from '../Providers/MoviesContext'; // import the custom hook

const FeaturedMovies = () => {
  const { movies } = useMovies(); // Access the movies data from context


  // Filter the highest-rated movies (or any other logic you want)
  const featuredMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredMovies.map((movie) => (
          <div
            key={movie._id}
            className="card bg-base-100 shadow-xl p-4 border border-gray-200"
          >
            <figure>
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-md object-cover h-48 w-full"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">{movie.title}</h3>
              <p><span className="font-semibold">Genre:</span> {movie.genre}</p>
              <p><span className="font-semibold">Duration:</span> {movie.duration} mins</p>
              <p><span className="font-semibold">Release Year:</span> {movie.releaseYear}</p>
              <p><span className="font-semibold">Rating:</span> {movie.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
