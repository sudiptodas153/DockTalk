import React from 'react';
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';

const AvailableDoctors = ({doctorsData}) => {
    return (
        <div className='mt-16'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold'>Our Best Doctors</h2>
                <p className='text-sm md:px-36'>At our clinic, we are proud to have a team of highly qualified and compassionate doctors who are committed to providing exceptional healthcare. Each of our specialists brings years of experience, advanced medical knowledge, and a patient-first approach to ensure the best possible care for every individual.</p>
               
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