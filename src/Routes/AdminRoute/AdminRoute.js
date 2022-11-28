import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import Spiner from '../../Component/Spiner/Spiner';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    console.log(isAdminLoading)

    if (loading || isAdminLoading) {
        return <Spiner></Spiner>
    }

    if (user && isAdmin) {
        return children;
        
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    
    
};

export default AdminRoute;