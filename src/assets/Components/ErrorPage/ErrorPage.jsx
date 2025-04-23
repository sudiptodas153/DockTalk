import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className='bg-white text-center md:p-20'>
                <h2 className='text-9xl text-green-500 font-bold'>404</h2>
                <h3 className='text-5xl font-semibold'>Page Not Found</h3>
                <Link to={'/'}>
                    <button className='btn bg-green-500 text-white mt-4'>Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;