import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';

const AvailableDoctor = ({ doctorData }) => {

    const { experience, name, education, registration_number } = doctorData;

    return (
        <div>
            <div className="card bg-white rounded-xl mt-4 md:mt-8">
                <div className=''>
                    <img className='p-6 '
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="" />
                </div>
                <div className="px-6">
                    <div className='flex items-center gap-6'>
                        <p className='text-green-600 border-2 border-green-200 text-xs font-semibold bg-green-100 py-1 px-3 rounded-2xl'>Available</p>
                        <p className='text-blue-600 border-2 border-blue-200 text-xs font-semibold bg-blue-100 py-1 px-3 rounded-2xl'>{experience} Experience</p>
                    </div>
                    <div className='mt-3 space-y-1 pb-3 border-b-2 border-dashed border-gray-300'>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className='text-sm text-gray-600'>{education}</p>
                    </div>
                    <div className="mt-4 pb-5 space-y-3">
                        <p className='flex items-center gap-2 text-xs text-gray-700'><PiTrademarkRegisteredLight size={17}/> Reg No: {registration_number}</p>
                        <button className="btn bg-white border-1 w-full border-blue-400 text-blue-600 font-bold  rounded-4xl">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableDoctor;