import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/blog/blog";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";
import PrivateRoute from "../components/private/privateRoute";
import Shop from "../pages/shop/shop";



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
            },
            {
                path:"/shop",
                element:<Shop />
            },
            {
                element:<PrivateRoute />,
                children:[
                    {
                        path:"/profile",
                        element:<Profile />
                    }
                ]
            }
        ]


    }
])