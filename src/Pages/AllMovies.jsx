import React, { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useMovies } from '../Providers/MoviesContext';

const AllMovies = () => {
    const movies = useLoaderData(); // Load movies data
    const { updateMovies } = useMovies(); // Get updateMovies function from context

    // Update the context with the movies data when the component is mounted
    useEffect(() => {
      updateMovies(movies); // Update the context with the movies data
    }, [movies, updateMovies]);

    const [searchQuery, setSearchQuery] = useState(''); // State for the search query

    // Filter movies based on the search query
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-6">
            {/* Page Header */}
            <h2 className="text-3xl font-bold text-center mb-8">
                All Movies ({filteredMovies.length})
            </h2>

            {/* Search Input */}
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search by Title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-1/2  dark:bg-gray-900 dark:text-white border-white bg-slate-100 text-black "
                />
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMovies.map((movie) => (
                    <div
                        key={movie._id}
                        className="card  dark:bg-gray-900 dark:text-white bg-slate-100 text-black  shadow-xl p-4 border border-gray-200"
                    >
                        {/* Movie Poster */}
                        <figure>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="rounded-md object-cover h-48 w-full"
                            />
                        </figure>

                        {/* Card Body */}
                        <div className="card-body">
                            {/* Movie Title */}
                            <h3 className="card-title text-lg font-bold">{movie.title}</h3>

                            {/* Movie Details */}
                            <p>
                                <span className="font-semibold">Genre:</span> {movie.genre}
                            </p>
                            <p>
                                <span className="font-semibold">Duration:</span> {movie.duration} mins
                            </p>
                            <p>
                                <span className="font-semibold">Release Year:</span> {movie.releaseYear}
                            </p>

                            {/* Movie Rating */}
                            <p>
                                <span className="font-semibold">Rating:</span>{' '}
                                <span className="text-yellow-500">{movie.rating} / 5</span>
                            </p>

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
        </div>
    );
};

export default AllMovies;
