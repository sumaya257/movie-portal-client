import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth if using Firebase

const MovieDetails = () => {
    const { id } = useParams();
    const movies = useLoaderData();
    const navigate = useNavigate();  // To navigate programmatically

    // Find the specific movie by ID
    const movie = movies.find((movie) => movie._id === id);

    // Get the current user's email (either from Firebase or localStorage)
    const auth = getAuth();
    const user = auth.currentUser;
    const userEmail = user ? user.email : localStorage.getItem('userEmail'); // First try Firebase, else use localStorage

    if (!userEmail) {
        // Handle case where no email is available
        console.error('User email is not available.');
        return <div>Error: User is not authenticated.</div>;
    }

    // Handle delete movie
    const handleDelete = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/movie/${id}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        Swal.fire(
                            'Deleted!',
                            'The movie has been deleted.',
                            'success'
                        );
                        navigate('/all-movies');
                    } else {
                        throw new Error('Failed to delete movie');
                    }
                } catch (error) {
                    console.error(error);
                    Swal.fire(
                        'Error!',
                        'There was a problem deleting the movie.',
                        'error'
                    );
                }
            }
        });
    };

    const handleAddToFavorite = async () => {
        try {
            // Create the favorite movie object
            const favoriteMovie = {
                email: userEmail, // Attach the user's email
                movieId: id, // Movie ID
                title: movie.title, // Movie title
                poster: movie.poster, // Movie poster
                genre: movie.genre,
                duration: movie.duration,
                releaseYear:movie.releaseYear,
                rating:movie.rating
            };

            // Send a POST request to add the movie to favorites
            const response = await fetch('http://localhost:5000/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(favoriteMovie),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.message);
                Swal.fire(
                    'Success!',
                    'Movie added to your favorites!',
                    'success'
                );
            } else {
                throw new Error('Failed to add movie to favorites.');
            }
        } catch (error) {
            console.error(error);
            Swal.fire(
                'Error!',
                'There was an error adding the movie to favorites.',
                'error'
            );
        }
    };

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
                    <p><strong>Summary:</strong> {movie.summary}</p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    {/* Delete Movie Button */}
                    <button
                        onClick={handleDelete}
                        className="btn btn-danger"
                    >
                        Delete Movie
                    </button>

                    {/* Add to Favorite Button */}
                    <button
                        onClick={handleAddToFavorite}
                        className="btn btn-primary"
                    >
                        Add to Favorite
                    </button>
                </div>
            </div>

            {/* See All Movies Button */}
            <div className='flex gap-4 justify-between'>
            <div className="text-center mt-8">
                <Link to={`/updatemovie/${id}`}>
                    <button className="btn btn-primary">Update Movie</button>
                </Link>
            </div>
            <div className="text-center mt-8">
                <Link to="/all-movies">
                    <button className="btn btn-secondary">See All Movies</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default MovieDetails;
