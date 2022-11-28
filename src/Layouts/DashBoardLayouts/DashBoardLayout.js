import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import useUser from '../../Hooks/useUser';
import NavBar from '../../SharedPage/NavBar/NavBar';

const DashBoardLayout = () => {

    const {user}= useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email)
    const [isSeller]=useSeller(user?.email)
    const [isUser] =useUser(user?.email)
    console.log(isUser)
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
                        {
                            isAdmin && <>
                            <li><Link to="/dashBoard/inputCategory">Category Input</Link></li>
                            <li><Link to="/dashBoard/seller">Manage User and Seller</Link></li>
                            <li><Link to="/dashBoard/advertisement">Show Advertisement</Link></li>
                            </>
                        }
                        {/* <li><Link to="/dashBoard/inputCategory">Category Input</Link></li>
                        <li><Link to="/dashBoard/seller">Manage User and Seller</Link></li>
                    <li><Link to="/dashBoard/advertisement">Show Advertisement</Link></li> */}

                        {
                            isSeller && <>
                             <li><Link to="/dashBoard/addProduct">Add Product</Link></li>
                             <li><Link to="/dashBoard/myProducts">My Products</Link></li>
                            <li><Link to="/dashBoard/myBuyers">MY Buyers</Link></li></>
                        }
                        {/* <li><Link to="/dashBoard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashBoard/myProducts">My Products</Link></li>
                    <li><Link to="/dashBoard/myBuyers">MY Buyers</Link></li> */}
                    {
                        isUser && <>
                        <li><Link to="/dashBoard/myOrders">My Orders</Link></li></>
                    }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;