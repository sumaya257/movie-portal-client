import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddMovie from "../Pages/AddMovie";
import AllMovies from "../Pages/AllMovies";
import MovieDetails from "../Pages/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/add-movie',
                element: <AddMovie />,
            },
            {
                path: '/all-movies',
                element: <AllMovies />,
                loader: () => fetch('http://localhost:5000/movie'),
            },
            {
                path: '/movie/:id',
                element:<MovieDetails></MovieDetails>,
                loader: () => fetch('http://localhost:5000/movie'),
            },
        ]
    },

    {
        path: '*', // This will catch all invalid routes
        element: <ErrorPage />,
    },
]);

export default router