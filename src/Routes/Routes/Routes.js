import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import ErrorPage from "../../Component/ErrorPage/ErrorPage";
import Home from "../../Component/Home/Home";
import Main from "../../Layouts/Main/Main";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
        ]
    }
])