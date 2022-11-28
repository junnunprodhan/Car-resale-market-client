import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import Spiner from '../../Component/Spiner/Spiner';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useAdmin(user?.email);
    const location = useLocation();
    console.log(isSellerLoading)

    if (loading || isSellerLoading) {
        return <Spiner></Spiner>
    }

    if (user && isSeller) {
        return children;
        
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    
    
};

export default AdminRoute;