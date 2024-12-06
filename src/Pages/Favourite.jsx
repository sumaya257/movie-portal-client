import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Favourite = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    const currentUserEmail = 'sumayaecetabassum@gmail.com'; // Replace this with actual user data (e.g., from context or authentication)

    useEffect(() => {
        // Fetch favorite movies for the logged-in user
        const fetchFavorites = async () => {
            try {
                // Make sure to adjust the URL with the correct user's email or other user identifier
                const response = await fetch(`http://localhost:5000/favorites?email=${currentUserEmail}`);
                const data = await response.json();
                setFavorites(data);
            } catch (error) {
                console.error('Error fetching favorites:', error);
                Swal.fire('Error!', 'Failed to load favorite movies.', 'error');
            }
        };

        fetchFavorites();
    }, []);

    const handleDeleteFavorite = async (movieId) => {
        try {
            // Send request to delete the movie from favorites
            const response = await fetch(`http://localhost:5000/favorites/${movieId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Swal.fire('Deleted!', 'The movie has been removed from your favorites.', 'success');
                // Update the state to reflect the deletion
                setFavorites(favorites.filter((movie) => movie._id !== movieId));
            } else {
                throw new Error('Failed to delete movie from favorites.');
            }
        } catch (error) {
            console.error('Error deleting favorite movie:', error);
            Swal.fire('Error!', 'Failed to delete movie from favorites.', 'error');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Your Favorite Movies</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {favorites.length > 0 ? (
                    favorites.map((movie) => (
                        <div key={movie._id} className="bg-white rounded-md shadow-lg p-4">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="rounded-md object-cover h-64 w-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-center">{movie.title}</h3>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Duration:</strong> {movie.duration} mins</p>
                            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                            <p><strong>Rating:</strong> {movie.rating} / 5</p>
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => handleDeleteFavorite(movie._id)}
                                    className="btn btn-danger"
                                >
                                    Delete Favorite
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3">You have no favorite movies yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favourite;
