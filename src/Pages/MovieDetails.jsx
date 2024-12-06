import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams()
    const movies = useLoaderData()
    console.log(id)
    console.log(movies)
    // Find the specific movie by ID
    const movie = movies.find((movie) => movie._id === id);
    console.log('got movie',movie)
    

    return (
        <div className="container mx-auto p-6">
            <div className="movie-details">
                <h2 className="text-3xl font-bold text-center mb-4">{movie.title}</h2>

                <div className="flex justify-center mb-4">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="rounded-md object-cover h-64 w-48"
                    />
                </div>

                <div className="text-center">
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Duration:</strong> {movie.duration} mins</p>
                    <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                    <p><strong>Rating:</strong> {movie.rating} / 5</p>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    {/* Delete Movie Button */}
                    <button
                        // onClick={handleDelete}
                        className="btn btn-danger"
                    >
                        Delete Movie
                    </button>

                    {/* Add to Favorite Button */}
                    <button
                        // onClick={handleAddToFavorite}
                        className="btn btn-primary"
                    >
                        Add to Favorite
                    </button>
                </div>
            </div>
             {/* See All Movies Button */}
             <div className="text-center mt-8">
                <Link to="/all-movies">
                    <button className="btn btn-secondary">See All Movies</button>
                </Link>
            </div>
        </div>
    );
};

export default MovieDetails;