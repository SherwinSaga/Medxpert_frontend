import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utility/utility';

const PrivateRoute = () => {
    const user = getCurrentUser();

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
