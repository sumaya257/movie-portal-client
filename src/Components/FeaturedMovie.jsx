import React from 'react';
import { useMovies } from '../Providers/MoviesContext'; // import the custom hook
import { Link } from 'react-router-dom';

const FeaturedMovies = () => {
    const { movies } = useMovies(); // Access the movies data from context


    // Filter the highest-rated movies (or any other logic you want)
    const featuredMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);

    return (
        <div className='mb-16 
        <div className="p-6 mt-16  dark:bg-gray-900 dark:text-white border bg-slate-100 text-black rounded-lg'>
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Movies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredMovies.map((movie) => (
                        <div
                            key={movie._id}
                            className="card  shadow-xl p-1 border border-gray-200"
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
                                {/* See Details Button */}
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/movie/${movie._id}`}>
                                        <button className="btn btn-primary">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* see all movies */}
                <div className="text-center mt-4">
                <Link to="/all-movies">
                    <button className="btn btn-secondary p-3">See All Movies</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default FeaturedMovies;
