import React from 'react';
import image from '../../images/logo.png'
import { NavLink } from 'react-router';
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/booking'}>My-Bookings</NavLink>
        <NavLink to={'/blogs'}>Blogs</NavLink>
        <NavLink to={'/contact'}>Contact Us</NavLink>

    </>

    return (
        <div className='bg-white mt-20 space-y-5 text-center p-4 md:p-20'>
            <div className='flex justify-center'>
            <a className="flex items-center gap-1 md:gap-3 text-2xl md:text-3xl "><span><img className='w-9' src={image} alt="" /></span><span className='font-bold'>MediCare</span></a>
            </div>
            <div className='border-b-2 border-gray-300 pb-6 md:mx-40'>
            <ul className="menu gap-4 text-gray-600 md:gap-10 menu-horizontal ">
                    {links}
                </ul>
            </div>

            <div className='flex items-center justify-center gap-5'>
                <a target='blank' className='text-blue-500' href='https://www.facebook.com/profile.php?id=100094053365815'><FaFacebook size={30} /></a>
                <a target='blank' href='https://github.com/sudiptodas153'><FaGithub size={30}/></a>
                <a target='blank' className='text-blue-500'  href='https://www.linkedin.com/in/sudipto-das-677330343/'><FaLinkedin size={30}/></a>
                <a target='blank' className='text-red-700 ' href='https://www.youtube.com/@As-Sudipto'><FaYoutube size={35}/></a>
            </div>
            
        </div>
    );
};

export default Footer;