import React from 'react';
import bannerImage from '../../../images/banner-img-1.png'
import bannerImage2 from '../../../images/camera-hospital-group-team-doctor-beard_1291-36.avif'

const Banner = () => {
    return (
        <div className='bg-gradient-to-t from-white  to-[#EFEFEF] border-2 border-white px-2 py-6 md:p-10 rounded-2xl'>
            <div className='text-center space-y-4'>
                <h2 className='text-2xl md:text-4xl font-bold'>Dependable Care, Backed by Trusted Professionals.</h2>
                <p className='text-sm'>We believe that quality healthcare starts with trust. Our team of experienced medical professionals is dedicated to delivering dependable care rooted in compassion, expertise, and integrity. Every doctor in our network is carefully selected for their commitment to clinical excellence and patient well-being.</p>
            </div>
            <div className='text-center '>
                <input type="text" className="input md:w-[420px] rounded-3xl mt-4" placeholder="Search any doctor..." />
                <button className="btn rounded-3xl md:ml-3 mt-4 bg-[#176AE5] text-white">Search Now</button>
            </div>
            <div className='md:flex md:justify-center md:gap-10 '>
                <img className='md:w-[500px] mt-4' src={bannerImage} alt="" />
                <img className='md:w-[500px] rounded-xl mt-4' src={bannerImage2} alt="" />
            </div>
        </div>
    );
};

export default Banner;