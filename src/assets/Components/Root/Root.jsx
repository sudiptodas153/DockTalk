import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    // const navigation = useNavigation();


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default Root;