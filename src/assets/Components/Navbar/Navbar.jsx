import React from 'react';
import { Link, NavLink } from 'react-router';
import image from '../../images/logo.png'
import './nav.css'
import { IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/booking'}>My-Bookings</NavLink>
        <NavLink to={'/blogs'}>Blogs</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>

    </>
    const links2 = <>
        <Link to={'/'}>Home</Link>
        <Link to={'/booking'}>My-Bookings</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/contact'}>Contact Us</Link>

    </>

    return (
        <div className='container mx-auto md:px-10'>
            <div className="navbar">
                <div className="navbar-start">
                   
                    <a className="flex items-center gap-1 md:gap-3 text-2xl md:text-3xl "><span><img className='w-9' src={image} alt="" /></span><span className='font-bold'>MediCare</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-10 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">



                    <div className="drawer z-50 md:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex justify-end">
                           
                            <label htmlFor="my-drawer" className="drawer-button"><IoMenuSharp size={35}/></label>
                        </div>
                        
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 space-y-4 text-base-content min-h-full w-80 p-4">
                              {links2}
                              <a className="btn mt-4 rounded-3xl bg-red-500 font-bold text-white">Emergency</a>
                            </ul>
                            
                        </div>
                       
                        
                    </div>


                    <a className="btn hidden md:flex rounded-3xl bg-red-500 font-bold text-white">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;