import React from 'react';
import Banner from '../Banner/Banner';
import AvailableDoctors from '../Doctors/AvailableDoctors/AvailableDoctors';
import { useLoaderData } from 'react-router';
import MedicalService from '../MedicalService/MedicalService';

const Home = () => {
    const doctorsData = useLoaderData()
    
    return (
        <div className='container mx-auto px-2 mt-6'>
            <Banner></Banner>
            <AvailableDoctors doctorsData={doctorsData}></AvailableDoctors>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;