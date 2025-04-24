import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Await, Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loading from '../Homes/Loading/Loading';

const Root = () => {
    const navigation = useNavigation();



    return (
        <div>
            <Navbar></Navbar>
            
            { navigation.state == "loading" ? <Loading></Loading>:  <Outlet /> }

            <Footer></Footer>

        </div>
    );
};

export default Root;