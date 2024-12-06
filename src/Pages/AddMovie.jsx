import React from 'react';

const AddMovie = () => {
    return (
        <div className="p-6 w-9/12 mx-auto bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Add Movie</h1>
            <form  className="space-y-4">
                <div>
                    <label>Movie Poster (URL):</label>
                    <input
                        type="text"
                        name="poster"
                        // value={formData.poster}
                        // onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Movie Title:</label>
                    <input
                        type="text"
                        name="title"
                        // value={formData.title}
                        // onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Genre:</label>
                    <select
                        name="genre"
                        // value={formData.genre}
                        // onChange={handleChange}
                        className="border p-2 w-full"
                    >
                        <option value="">Select Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                    </select>
                </div>
                <div>
                    <label>Duration (minutes):</label>
                    <input
                        type="number"
                        name="duration"
                        // value={formData.duration}
                        // onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Release Year:</label>
                    <select
                        name="releaseYear"
                        // value={formData.releaseYear}
                        // onChange={handleChange}
                        className="border p-2 w-full"
                    >
                        <option value="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <label>Rating:</label>
                    {/* <Rating onClick={handleRating} ratingValue={rating} /> */}
                </div>
                <div>
                    <label>Summary:</label>
                    <textarea
                        name="summary"
                        // value={formData.summary}
                        // onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovie;

// src/pages/AddMovie.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Rating } from 'react-simple-star-rating';

// toast.configure();

// const AddMovie = () => {
//     const [formData, setFormData] = useState({
//         poster: '',
//         title: '',
//         genre: '',
//         duration: '',
//         releaseYear: '',
//         rating: 0,
//         summary: '',
//     });

//     const userEmail = "user@example.com"; // Replace with authenticated user's email
//     const [rating, setRating] = useState(0);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleRating = (rate) => {
//         setRating(rate);
//         setFormData({ ...formData, rating: rate / 20 }); // Convert to 1-5 scale
//     };

//     const validateForm = () => {
//         if (!formData.poster.startsWith('http')) {
//             toast.error('Poster must be a valid URL.');
//             return false;
//         }
//         if (formData.title.length < 2) {
//             toast.error('Title must have at least 2 characters.');
//             return false;
//         }
//         if (!formData.genre) {
//             toast.error('Genre is required.');
//             return false;
//         }
//         if (formData.duration <= 60) {
//             toast.error('Duration must be greater than 60 minutes.');
//             return false;
//         }
//         if (!formData.releaseYear) {
//             toast.error('Release year is required.');
//             return false;
//         }
//         if (rating === 0) {
//             toast.error('Rating is required.');
//             return false;
//         }
//         if (formData.summary.length < 10) {
//             toast.error('Summary must have at least 10 characters.');
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         try {
//             const response = await axios.post('http://localhost:5000/add-movie', {
//                 ...formData,
//                 userEmail,
//             });
//             toast.success(response.data.message);
//             setFormData({
//                 poster: '',
//                 title: '',
//                 genre: '',
//                 duration: '',
//                 releaseYear: '',
//                 rating: 0,
//                 summary: '',
//             });
//             setRating(0);
//         } catch (error) {
//             toast.error('Failed to add movie.');
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Add Movie</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label>Movie Poster (URL):</label>
//                     <input
//                         type="text"
//                         name="poster"
//                         value={formData.poster}
//                         onChange={handleChange}
//                         className="border p-2 w-full"
//                     />
//                 </div>
//                 <div>
//                     <label>Movie Title:</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         className="border p-2 w-full"
//                     />
//                 </div>
//                 <div>
//                     <label>Genre:</label>
//                     <select
//                         name="genre"
//                         value={formData.genre}
//                         onChange={handleChange}
//                         className="border p-2 w-full"
//                     >
//                         <option value="">Select Genre</option>
//                         <option value="comedy">Comedy</option>
//                         <option value="drama">Drama</option>
//                         <option value="horror">Horror</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label>Duration (minutes):</label>
//                     <input
//                         type="number"
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         className="border p-2 w-full"
//                     />
//                 </div>
//                 <div>
//                     <label>Release Year:</label>
//                     <select
//                         name="releaseYear"
//                         value={formData.releaseYear}
//                         onChange={handleChange}
//                         className="border p-2 w-full"
//                     >
//                         <option value="">Select Year</option>
//                         <option value="2024">2024</option>
//                         <option value="2023">2023</option>
//                         <option value="2022">2022</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label>Rating:</label>
//                     <Rating onClick={handleRating} ratingValue={rating} />
//                 </div>
//                 <div>
//                     <label>Summary:</label>
//                     <textarea
//                         name="summary"
//                         value={formData.summary}
//                         onChange={handleChange}
//                         className="border p-2 w-full"
//                     />
//                 </div>
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//                     Add Movie
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddMovie;
