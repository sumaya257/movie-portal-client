import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddMovie from "../Pages/AddMovie";

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
      ]
    },

    {
        path: '*', // This will catch all invalid routes
        element: <ErrorPage />,
    },
  ]);

  export default router