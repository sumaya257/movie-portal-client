import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify'; // For notifications
import { AuthContext } from '../Providers/AuthProvider';
import { sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../Firebase/firebase.init';
import { getAuth } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth(app);

    const emailRef = useRef();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError({ ...error, reset: 'Please provide a valid email address' });
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success(
                    <div>
                        <p>Password reset email sent successfully!</p>
                        <button
                            onClick={() => window.open('https://mail.google.com', '_blank')}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Go to Gmail
                        </button>
                    </div>
                );
            })
            .catch((err) => {
                setError({ ...error, reset: err.message });
            });
    };

    // Google Sign-In
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                setError({ ...error, login: error.message });
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 relative">
            <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl p-10 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            ref={emailRef}
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
                        {error.login && (
                            <label className="label text-red-400 text-sm">
                                {error.login}
                            </label>
                        )}
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                        {error.reset && (
                            <label className="label text-red-400 text-sm">
                                {error.reset}
                            </label>
                        )}
                    </div>

                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        containerStyle={{
                            position: 'absolute',
                            bottom: '20px',
                            width: 'auto',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        }}
                    />

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>

                    <div className="divider my-4">OR</div>

                    <div className="form-control">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="btn btn-outline btn-accent"
                        >
                            Login with Google
                        </button>
                    </div>

                    <p className="text-center text-gray-500 mt-4">
                        Don't have an account?
                        <span className="text-red-500">
                            <Link to="/register"> Register</Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
