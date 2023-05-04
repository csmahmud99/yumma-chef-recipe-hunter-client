import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Recipe/Recipe/Recipe";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://yumma-chef-recipe-hunter-server-csmahmud99.vercel.app/chef-recipe")
            },
            {
                path: "recipe/:id",
                element: <PrivateRoutes><Recipe /></PrivateRoutes>,
                loader: ({params}) => fetch(`https://yumma-chef-recipe-hunter-server-csmahmud99.vercel.app/chef-recipe/${params.id}`)
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/Register",
                element: <Register />
            }
        ]
    }
]);

// Exporting router for using it inside the 'main.jsx' file
export default router;