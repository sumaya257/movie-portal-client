import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MovieUpdated = () => {
    const movie = useLoaderData(); // This will get the movie data from the loader
    const { _id, title, genre, duration, releaseYear, rating } = movie;
    const [updatedMovie, setUpdatedMovie] = useState(movie); // Use state to manage movie updates
    const navigate = useNavigate(); // To navigate after update

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMovie((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you will call an API to update the movie here
        fetch(`http://localhost:5000/movie/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMovie),
        })
            .then((response) => response.json())
            .then((data) => {
                // Navigate after successful update
                navigate(`/movie/${_id}`);
            })
            .catch((error) => {
                console.error('Error updating movie:', error);
            });
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Update Movie</h2>

            {/* Update Movie Form */}
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 gap-4">
                    <div className="form-control">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={updatedMovie.title}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            value={updatedMovie.genre}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Duration (minutes)</label>
                        <input
                            type="number"
                            name="duration"
                            value={updatedMovie.duration}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Release Year</label>
                        <input
                            type="number"
                            name="releaseYear"
                            value={updatedMovie.releaseYear}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={updatedMovie.rating}
                            onChange={handleChange}
                            className="input input-bordered"
                            required
                            max="5"
                            min="0"
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Update Movie
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MovieUpdated;
