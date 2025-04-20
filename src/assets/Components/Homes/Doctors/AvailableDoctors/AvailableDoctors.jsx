import React from 'react';
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';

const AvailableDoctors = ({doctorsData}) => {
    return (
        <div className='mt-16'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold'>Our Best Doctors</h2>
                <p className='text-sm md:px-30'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
                {
                    doctorsData.map(doctorData => <AvailableDoctor doctorData={doctorData}
                    key={doctorData.id}
                    ></AvailableDoctor>)
                }
            </div>
        </div>
    );
};

export default AvailableDoctors;