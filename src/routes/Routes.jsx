import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Recipe from "../pages/Recipe/Recipe/Recipe";

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
            }
        ]
    }
]);

// Exporting router for using it inside the 'main.jsx' file
export default router;