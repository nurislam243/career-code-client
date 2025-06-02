import React, { Children, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../pages/Shared/Spinner';

const PrivateRoute = ({children}) => {
    const { loading } = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if(!user){
        return <Navigate to={'/signIn'} state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;