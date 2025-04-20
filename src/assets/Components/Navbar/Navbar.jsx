import React from 'react';
import { NavLink } from 'react-router';
import image from '../../images/logo.png'
import './nav.css'

const Navbar = () => {
const links = <>
<NavLink to={'/'}>Home</NavLink>
<NavLink to={'/booking'}>My-Bookings</NavLink>
<NavLink to={'/blogs'}>Blogs</NavLink>
<NavLink to={'/contact'}>Contact Us</NavLink>

</>

    return (
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="flex items-center gap-3 text-3xl "><span><img className='w-9' src={image} alt="" /></span><span className='font-bold'>DocBD</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-10 menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-3xl bg-[#176AE5] text-white">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;