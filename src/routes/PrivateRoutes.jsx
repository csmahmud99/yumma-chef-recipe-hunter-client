import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;