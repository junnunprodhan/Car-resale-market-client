import { createBrowserRouter } from "react-router-dom";
import Advertisement from "../../Component/Advertisement/Advertisement";
import Blog from "../../Component/Blog/Blog";
import DashBoard from "../../Component/DashBoard/DashBoard/DashBoard";
import InputCategory from "../../Component/DashBoard/InputCategory/InputCategory";
import ErrorPage from "../../Component/ErrorPage/ErrorPage";
import Home from "../../Component/Home/Home";
import Seller from "../../Component/Seller/Seller";
import User from "../../Component/User/User";
import DashBoardLayout from "../../Layouts/DashBoardLayouts/DashBoardLayout";
import Main from "../../Layouts/Main/Main";
import Login from "../../SharedPage/Login/Login";
import Register from "../../SharedPage/Register/Register";


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
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
           
        ]
    },
    {
        path:'/dashBoard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path:'/dashBoard',
                element:<DashBoard></DashBoard>
            },
            {
                path:'/dashBoard/inputCategory',
                element:<InputCategory></InputCategory>
            },
            {
                path:'/dashBoard/user',
                element:<User></User>
            },
            {
                path:'/dashBoard/advertisement',
                element:<Advertisement></Advertisement>
            },
            {
                path:'/dashBoard/seller',
                element:<Seller></Seller>
            }
        ]
    }
])