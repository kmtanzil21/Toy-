import React from 'react';
import Register from './Register';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar'

const Authentication = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;