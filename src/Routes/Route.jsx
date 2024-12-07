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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                loader: () => fetch('http://localhost:5000/movie'),
            },
            {
                path: '/movie/:id',
                element:<MovieDetails></MovieDetails>,
                loader: () => fetch('http://localhost:5000/movie'),
            },
            {
                path: '/favourite',
                element:<Favourite></Favourite>,
            },
            {
                path: '/updatemovie/:id',
                element:<MovieUpdated></MovieUpdated>,
                loader:({params})=> fetch(`http://localhost:5000/movie/${params.id}`)
            },
        ]
    },

    {
        path: '*', // This will catch all invalid routes
        element: <ErrorPage />,
    },
]);

export default router