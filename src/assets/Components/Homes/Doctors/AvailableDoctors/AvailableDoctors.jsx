import React, { useEffect, useState } from 'react';
import AvailableDoctor from '../AvailableDoctor/AvailableDoctor';

const AvailableDoctors = ({ doctorsData }) => {

    const [displayBtn, setDisplayBtn] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayBtn(doctorsData)
        }
        else {
            setDisplayBtn(doctorsData.slice(0, 6))
        }

    }, [doctorsData, showAll])

    return (
        <div className='mt-16'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-bold'>Our Best Doctors</h2>
                <p className='text-sm md:px-36'>At our clinic, we are proud to have a team of highly qualified and compassionate doctors who are committed to providing exceptional healthcare. Each of our specialists brings years of experience, advanced medical knowledge, and a patient-first approach to ensure the best possible care for every individual.</p>

            </div>
            <div >
                <div className='grid grid-cols-1 md:grid-cols-3 md:mt-8 md:gap-2'>
                    {
                        displayBtn.map(doctorData => <AvailableDoctor doctorData={doctorData}
                            key={doctorData.id}
                        ></AvailableDoctor>)
                    }
                </div>
                <div className='text-center mt-6'>
                    <button onClick={() => {
                        setShowAll(!showAll)
                         if (showAll) window.scrollTo(0, 0)
                    }} className='btn bg-blue-500 text-white rounded-xl'>{showAll ? 'Show Less' : 'Show All'}</button>
                </div>
            </div>
        </div>
    );
};

export default AvailableDoctors;