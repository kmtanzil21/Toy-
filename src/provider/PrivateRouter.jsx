import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user}= use(AuthContext);
    
    if(user&& user?.email)
    {
        return children;
    }
    
     return   <Navigate to="/authentication/login"></Navigate>;
    
    
};

export default PrivateRouter;