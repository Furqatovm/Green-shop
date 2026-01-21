import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/blog/blog";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";

export const router =createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children:[
            {
                index:true,
                element: <Home />
            },
            {
                path:"/blog",
                element:<Blog />
            },
            {
                path:"/profile",
                element:<Profile />
            }
        ]


    }
])