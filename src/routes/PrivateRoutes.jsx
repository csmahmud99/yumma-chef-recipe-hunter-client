import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoutes;