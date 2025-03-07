import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddMovie from "../Pages/AddMovie";
import AllMovies from "../Pages/AllMovies";
import MovieDetails from "../Pages/MovieDetails";
import Favourite from "../Pages/Favourite";
import MovieUpdated from "../Pages/MovieUpdated";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Components/AboutUs";



const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
             
            {
                path: '/',
                element: <Home />,
                
            },
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
                element: <PrivateRoute><AddMovie /></PrivateRoute>,
            },
            {
                path: '/all-movies',
                element: <AllMovies />,
                loader: () => fetch('https://movie-portal-server-rust.vercel.app/movie'),
            },
            {
                path: '/movie/:id',
                element:<PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
                loader: () => fetch('https://movie-portal-server-rust.vercel.app/movie'),
            },
            {
                path: '/favourite',
                element:<PrivateRoute><Favourite></Favourite></PrivateRoute>,
            },

            {
                path: '/aboutus',
                element: <AboutUs />,
                
            },
            {
                path: '/updatemovie/:id',
                element:<PrivateRoute><MovieUpdated></MovieUpdated></PrivateRoute>,
                loader:({params})=> fetch(`https://movie-portal-server-rust.vercel.app/movie/${params.id}`)
            },
        ]
    },

    {
        path: '*', // This will catch all invalid routes
        element: <ErrorPage />,
    },
]);

export default router