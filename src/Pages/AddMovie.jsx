import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Rating } from 'react-simple-star-rating';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MovieUpdated = () => {
    const movie = useLoaderData(); // Get movie data from the loader
    const { _id, title, genre, duration, releaseYear, rating: initialRating, summary, poster } = movie;

    const [updatedMovie, setUpdatedMovie] = useState({
        title,
        genre,
        duration,
        releaseYear,
        rating: initialRating,
        summary,
        poster,
    });
    const [errors, setErrors] = useState({});
    const [rating, setRating] = useState(initialRating || 0); // Set the initial rating
    const navigate = useNavigate();

    const handleRating = (rate) => {
        setRating(rate / 20); // Convert rating to a scale of 1-5
    };

    const validateInputs = (formData) => {
        const validationErrors = {};

        // Validate poster URL
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (!formData.poster || !urlRegex.test(formData.poster)) {
            validationErrors.poster = 'Poster must be a valid URL.';
        }

        // Validate title
        if (!formData.title || formData.title.trim().length < 2) {
            validationErrors.title = 'Title must be at least 2 characters long.';
        }

        // Validate genre
        if (!formData.genre) {
            validationErrors.genre = 'Please select a genre.';
        }

        // Validate duration
        if (!formData.duration || formData.duration <= 60) {
            validationErrors.duration = 'Duration must be greater than 60 minutes.';
        }

        // Validate release year
        if (!formData.releaseYear) {
            validationErrors.releaseYear = 'Please select a release year.';
        }

        // Validate rating
        if (rating === 0) {
            validationErrors.rating = 'Please select a rating.';
        }

        // Validate summary
        if (!formData.summary || formData.summary.trim().length < 10) {
            validationErrors.summary = 'Summary must be at least 10 characters long.';
        }

        return validationErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedMovie((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateInputs(updatedMovie);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fix the highlighted errors before submitting.',
            });
            return;
        }

        const movieToUpdate = { ...updatedMovie, rating };

        fetch(`http://localhost:5000/movie/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieToUpdate),
        })
            .then((response) => response.json())
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Movie updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                navigate(`/movie/${_id}`);
            })
            .catch((error) => {
                console.error('Error updating movie:', error);
            });
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Update Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
                <div>
                    <label>Movie Poster (URL):</label>
                    <input
                        type="text"
                        name="poster"
                        value={updatedMovie.poster}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.poster && <p className="text-red-500">{errors.poster}</p>}
                </div>
                <div>
                    <label>Movie Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={updatedMovie.title}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>
                <div>
                    <label>Genre:</label>
                    <select
                        name="genre"
                        value={updatedMovie.genre}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    >
                        <option value="">Select Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                    </select>
                    {errors.genre && <p className="text-red-500">{errors.genre}</p>}
                </div>
                <div>
                    <label>Duration (minutes):</label>
                    <input
                        type="number"
                        name="duration"
                        value={updatedMovie.duration}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.duration && <p className="text-red-500">{errors.duration}</p>}
                </div>
                <div>
                    <label>Release Year:</label>
                    <select
                        name="releaseYear"
                        value={updatedMovie.releaseYear}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    >
                        <option value="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                    {errors.releaseYear && <p className="text-red-500">{errors.releaseYear}</p>}
                </div>
                <div>
                    <label>Summary:</label>
                    <textarea
                        name="summary"
                        value={updatedMovie.summary}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors.summary && <p className="text-red-500">{errors.summary}</p>}
                </div>
                <div className="p-6 bg-gray-100 rounded shadow-md">
                    <h3 className="text-lg font-bold mb-2">Rate This Movie</h3>
                    <div className="flex items-center space-x-2">
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating * 20} // Convert back to scale of 100
                            size={30}
                            fillColor="#1F2937"
                        />
                        <span>{rating} / 5</span>
                    </div>
                    {errors.rating && <p className="text-red-500">{errors.rating}</p>}
                </div>
                <button type="submit" className="bg-[#1F2937] text-white p-2 rounded">
                    Update Movie
                </button>
            </form>
        </div>
    );
};

export default MovieUpdated;
