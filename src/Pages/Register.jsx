import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Password Validation
        const passwordErrors = [];
        if (!/[A-Z]/.test(password)) {
            passwordErrors.push('Must have an uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            passwordErrors.push('Must have a lowercase letter.');
        }
        if (password.length < 6) {
            passwordErrors.push('Must be at least 6 characters long.');
        }

        if (passwordErrors.length > 0) {
            setError({ password: passwordErrors });
            return;
        }

        // Clear errors if validation passes
        setError({});

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log('User registered successfully:', user);
                updateUserProfile({
                    displayName: name, photoURL: photo
                }).then(
                    () => {
                        navigate('/')
                    }
                )
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Registration error:', errorCode, errorMessage);
                setError({ general: errorMessage });
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="input input-bordered pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {passwordVisible ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {error.password && (
                            <ul className="text-red-500 mt-2 text-xs">
                                {error.password.map((err, index) => (
                                    <li key={index}>{err}</li>
                                ))}
                            </ul>
                        )}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>

                    {error.general && (
                        <p className="text-center text-red-500 mt-4 text-xs">{error.general}</p>
                    )}

                    <p className="text-center text-gray-500 mt-4">
                        Already have an account?
                        <span className="text-red-500">
                            <Link to="/login"> Login</Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
