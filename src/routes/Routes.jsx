import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Recipe/Recipe/Recipe";
import Login from "../pages/Blog/Login/Login/Login";
import Register from "../pages/Blog/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/chef-recipe")
            },
            {
                path: "recipe/:id",
                element: <Recipe />,
                loader: ({params}) => fetch(`http://localhost:5000/chef-recipe/${params.id}`)
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