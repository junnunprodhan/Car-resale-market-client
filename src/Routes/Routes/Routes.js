import { createBrowserRouter } from "react-router-dom";
import Advertisement from "../../Component/Advertisement/Advertisement";
import Blog from "../../Component/Blog/Blog";
import AddProduct from "../../Component/DashBoard/AddProduct/AddProduct";
import DashBoard from "../../Component/DashBoard/DashBoard/DashBoard";
import InputCategory from "../../Component/DashBoard/InputCategory/InputCategory";
import MyBuyers from "../../Component/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Component/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Component/DashBoard/MyProduct/MyProducts";
import ErrorPage from "../../Component/ErrorPage/ErrorPage";
import Home from "../../Component/Home/Home";
import Seller from "../../Component/Seller/Seller";
import SIngleCategory from "../../Component/SingleCategory/SIngleCategory";

import DashBoardLayout from "../../Layouts/DashBoardLayouts/DashBoardLayout";
import Main from "../../Layouts/Main/Main";
import Login from "../../SharedPage/Login/Login";
import Register from "../../SharedPage/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
            {
                path: '/categoryProduct/:id',
                element: <PrivateRoute><SIngleCategory></SIngleCategory></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
           
        ]
    },
    {
        path:'/dashBoard',
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
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
                path:'/dashBoard/advertisement',
                element:<Advertisement></Advertisement>
            },
            {
                path:'/dashBoard/seller',
                element:<Seller></Seller>
            },
            {
                path:'/dashBoard/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashBoard/myProducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashBoard/myBuyers',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'/dashBoard/myOrders',
                element:<MyOrders></MyOrders>
            },
            
        ]
    }
])