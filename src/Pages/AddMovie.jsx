import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Rating } from 'react-simple-star-rating';

const AddMovie = ({ userEmail }) => {
    const [rating, setRating] = useState(0); // State to store the rating
    const [errors, setErrors] = useState({}); // State for validation errors

    const handleRating = (rate) => {
        setRating(rate); // Set the rating value (out of 100)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            poster: form.poster.value,
            title: form.title.value,
            genre: form.genre.value,
            duration: form.duration.value,
            releaseYear: form.releaseYear.value,
            summary: form.summary.value,
        };

        const validationErrors = validateInputs(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fix the highlighted errors before submitting.',
            });
            return;
        }

        const newMovie = {
            ...formData,
            rating,
            email: userEmail, // Add user's email to the movie data
        };

        // Send data to the server
        fetch('https://movie-portal-server-rust.vercel.app/movie', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie added successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                    form.reset();
                    setRating(0); // Reset the rating
                    setErrors({});
                }
            });
    };

    return (
        <div className="p-6 w-9/12 mx-auto  dark:bg-gray-900 dark:text-white border bg-slate-100 text-black ">
            <h1 className="text-2xl font-bold mb-4">Add Movie</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Movie Poster (URL):</label>
                    <input
                        type="text"
                        name="poster"
                        className="border p-2 w-full"
                    />
                    {errors.poster && <p className="text-red-500">{errors.poster}</p>}
                </div>
                <div>
                    <label>Movie Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="border p-2 w-full"
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>
                <div>
                    <label>Genre:</label>
                    <select name="genre" className="border p-2 w-full">
                        <option value="">Select Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="adventure">adventure</option>
                        <option value="sci-fi">sci-fi</option>
                    </select>
                    {errors.genre && <p className="text-red-500">{errors.genre}</p>}
                </div>
                <div>
                    <label>Duration (minutes):</label>
                    <input
                        type="number"
                        name="duration"
                        className="border p-2 w-full"
                    />
                    {errors.duration && <p className="text-red-500">{errors.duration}</p>}
                </div>
                <div>
                    <label>Release Year:</label>
                    <select name="releaseYear" className="border p-2 w-full">
                        <option value="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                    {errors.releaseYear && (
                        <p className="text-red-500">{errors.releaseYear}</p>
                    )}
                </div>
                <div className="p-6 w-1/2 mx-auto  rounded shadow-md">
                    <h1 className="text-xl font-bold mb-4">Rate This Movie</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating}
                            size={30}
                            fillColor="#1F2937"
                        />
                        <span className="text-lg font-semibold">{rating} / 5</span>
                    </div>
                    {errors.rating && <p className="text-red-500">{errors.rating}</p>}
                </div>
                <div>
                    <label>Summary:</label>
                    <textarea name="summary" className="border p-2 w-full" />
                    {errors.summary && <p className="text-red-500">{errors.summary}</p>}
                </div>
                <button type="submit" className="bg-[#1F2937] text-white p-2 rounded">
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovie;
