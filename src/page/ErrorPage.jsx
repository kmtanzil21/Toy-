import React from 'react';
import errorImg from '../assets/error2.jpeg'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
           <img className='' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;