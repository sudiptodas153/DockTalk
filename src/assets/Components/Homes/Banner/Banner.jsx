import React from 'react';
import bannerImage from '../../../images/banner-img-1.png'
import bannerImage2 from '../../../images/camera-hospital-group-team-doctor-beard_1291-36.avif'

const Banner = () => {
    return (
        <div className='bg-gradient-to-t from-white  to-[#EFEFEF] border-2 border-white px-2 py-6 md:p-10 rounded-2xl'>
            <div className='text-center space-y-4'>
                <h2 className='text-2xl md:text-4xl font-bold'>Dependable Care, Backed by Trusted Professionals.</h2>
                <p className='text-sm'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='text-center '>
                <input type="text" className="input md:w-[420px] rounded-3xl mt-4" placeholder="Search any doctor..." />
                <button className="btn rounded-3xl md:ml-3 mt-4 bg-[#176AE5] text-white">Search Now</button>
            </div>
            <div className='md:flex md:justify-center md:gap-10 mt-4'>
                <img className='w-[500px]' src={bannerImage} alt="" />
                <img className='w-[500px] rounded-3xl' src={bannerImage2} alt="" />
            </div>
        </div>
    );
};

export default Banner;