import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../SharedPage/NavBar/NavBar';

const DashBoardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">    
                        <li><Link to="/dashBoard/inputCategory">Category Input</Link></li>
                        <li><Link to="/dashBoard/user">Users</Link></li>
                        <li><Link to="/dashBoard/seller">seller</Link></li>
                        <li><Link to="/dashBoard/advertisement">Show Advertisement</Link></li>
                        <li><Link to="/dashBoard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashBoard/myProducts">My Products</Link></li>
                        <li><Link to="/dashBoard/myBuyers">MY Buyers</Link></li>
                        <li><Link to="/dashBoard/myOrders">My Orders</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;