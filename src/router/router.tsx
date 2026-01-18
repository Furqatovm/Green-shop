import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Blog from "../pages/blog/blog";

export const router =createBrowserRouter([
    {
        path:"/",
        element: <Home />
    },
    {
        path:"/blog",
        element: <Blog />
    }
])