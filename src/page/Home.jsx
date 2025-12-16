import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navigate to="/topproducts"></Navigate>
        </div>
    );
};

export default Home;