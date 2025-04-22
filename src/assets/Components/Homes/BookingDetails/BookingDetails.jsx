import React from 'react';


const BookingDetails = ({ list, removeData }) => {

    

    const { name, education, speciality, fee, id } = list;

    return (
        <div className='bg-white p-5 rounded-2xl mt-4 mx-3'>
            <div className='md:flex items-center justify-between border-b-2 pb-3 border-dashed border-gray-300'>
                <div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <p className='text-sm text-gray-500 mt-2'>{education} - {speciality}</p>
                </div>
                <div>
                    <p className='text-sm text-gray-500'>Appointment Fee : {fee} + Vat</p>
                </div>
            </div>
            <div className='mt-4'>
            <button onClick={()=>removeData(id)} className='w-full btn rounded-2xl border-2 text-red-600 border-red-300'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default BookingDetails;