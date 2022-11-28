import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spiner from '../../Component/Spiner/Spiner';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spiner></Spiner>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;