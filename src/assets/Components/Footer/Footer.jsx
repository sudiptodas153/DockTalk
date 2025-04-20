import React from 'react';
import image from '../../images/logo.png'
import { Link } from 'react-router';
import { FaFacebook, FaGithub, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const links = <>
        <Link to={'/'}>Home</Link>
        <Link to={'/booking'}>My-Bookings</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/contact'}>Contact Us</Link>

    </>

    return (
        <div className='bg-white mt-20 space-y-5 text-center p-4 md:p-20'>
            <div className='flex justify-center'>
            <a className="flex items-center gap-1 md:gap-3 text-2xl md:text-3xl "><span><img className='w-9' src={image} alt="" /></span><span className='font-bold'>DocBD</span></a>
            </div>
            <div className='border-b-2 border-gray-300 pb-6 md:mx-40'>
            <ul className="menu gap-4 text-gray-600 md:gap-10 menu-horizontal ">
                    {links}
                </ul>
            </div>

            <div className='flex items-center justify-center gap-5'>
                <p><FaFacebook size={30} /></p>
                <p><FaGithub size={30}/></p>
                <p><FaInstagramSquare size={30}/></p>
                <p><FaYoutube size={35}/></p>
            </div>
            
        </div>
    );
};

export default Footer;