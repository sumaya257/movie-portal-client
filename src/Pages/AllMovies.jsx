import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const AllMovies = () => {
    const movies = useLoaderData(); // Load movies data

    return (
        <div className="container mx-auto p-6">
            {/* Page Header */}
            <h2 className="text-3xl font-bold text-center mb-8">All Movies ({movies.length})</h2>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="card bg-base-100 shadow-xl p-4 border border-gray-200"
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
                                <Link to={`/movie/${movie.id}`}>
                                    <button className="btn btn-primary">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Movies Button */}
            <div className="text-center mt-8">
                <Link to="/movies">
                    <button className="btn btn-secondary">See All Movies</button>
                </Link>
            </div>
        </div>
    );
};

export default AllMovies;
