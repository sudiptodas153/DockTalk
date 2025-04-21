import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { useLoaderData } from 'react-router';

const DoctorDetails = () => {
    const doctorInfo = useLoaderData();
    const {fee, name, education, availability, speciality, registration_number, workplace, designation, image, } = doctorInfo;
    return (
        <div className='p-3 md:p-20'>
            <div className="grid grid-rows-1 md:flex md:items-start gap-5 md:gap-7 bg-white md:p-10 p-5 rounded-2xl">
                <div>
                    <img className='md:w-72 md:h-[350px] rounded-xl  bg-blue-300' src={image} alt="" />
                </div>

                <div>
                    <div className='space-y-3'>
                        <h2 className='text-3xl font-bold'>{name}</h2>
                        <div className='text-sm text-gray-600 space-y-1'>
                            <p>{education}</p>
                            <p>{speciality}</p>
                            <p>{designation}</p>
                        </div>
                    </div>
                    <div className='mt-4 space-y-1 '>
                        <p className='text-sm text-gray-600'>Working at</p>
                        <p className='text-xl font-bold'>{workplace}</p>
                    </div>
                    <div className='md:w-[600px] mt-4 mb-4 border-b-2 border-dashed border-gray-300 '></div>
                    <div>
                        <p className='flex items-center mb-4 gap-2 text-sm text-gray-700'><PiTrademarkRegisteredLight size={17} /> Reg No: {registration_number}</p>
                    </div>
                    <div className='md:w-[600px] mb-4 border-b-2 border-dashed border-gray-300 '></div>
                    <div className='flex items-center gap-7'>
                        <p className='font-bold'>Availability</p>
                        {
                            availability.map(day => <div className='flex text-xs'>
                                <p className='border-1 border-amber-100 font-bold text-amber-400 bg-amber-50 py-2 px-4 rounded-2xl'>{day}</p>
                            </div>)
                        }
                    </div>
                    <div className='flex items-center gap-3 mt-4'>
                        <p className='text-sm font-bold'>Consultation Fee:</p>
                        <p className='text-sm text-blue-600 font-bold'>Taka: {fee} <span className='text-gray-400'>(incl. Vat)</span> <span className='text-blue-500'>Per consultation</span></p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;