import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { Link } from 'react-router';

const AvailableDoctor = ({ doctorData }) => {

    const { experience, name, education, registration_number, image, id,availability, speciality } = doctorData;

    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });



    return (
        <div className=''>

            <div className="card bg-white rounded-xl mt-4 md:mt-1 p-6">
                <div className='flex justify-center  items-center p-6'>
                    <img className=' bg-green-300 rounded-xl pt-4 px-4 w-40 h-40'
                        src={image}
                        alt="" />
                </div>
                <div className="px-6">
                    <div className='flex items-center gap-6'>
                        {
                            availability[0] === dayName || availability[1] === dayName || availability[2] === dayName ? <p className='text-green-600 border-2 border-green-200 text-xs font-semibold bg-green-100 py-1 px-3 rounded-2xl'>Available</p> : <p className='text-red-600 border-2 border-red-200 text-xs font-semibold bg-red-100 py-1 px-3 rounded-2xl'>Unavailable</p>
                        }
                        
                        <p className='text-blue-600 border-2 border-blue-200 text-xs font-semibold bg-blue-100 py-1 px-1 md:px-3 rounded-2xl'>{experience} Experience</p>
                    </div>
                    <div className='mt-3 space-y-1 pb-3 border-b-2 border-dashed border-gray-300'>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className='text-sm text-gray-600'>{education}-{speciality}</p>
                    </div>
                    <div className="mt-4 pb-5 space-y-3">
                        <p className='flex items-center gap-2 text-xs text-gray-700'><PiTrademarkRegisteredLight size={17} /> Reg No: {registration_number}</p>
                        <Link to={`/doctorDetails/${id}`}>
                            <button className="btn bg-white border-1 w-full border-green-400 text-green-600 font-bold hover:bg-green-500 hover:text-white rounded-4xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableDoctor;