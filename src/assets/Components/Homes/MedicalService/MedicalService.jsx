import React from 'react';
import CountUp from 'react-countup';
import doctor from '../../../images/success-doctor.png'
import doctor2 from '../../../images/success-review.png'
import doctor3 from '../../../images/success-patients.png'
import doctor4 from '../../../images/success-staffs.png'

const MedicalService = () => {
    return (
        <div className='mt-10 md:mt-20'>
            <div className='text-center space-y-3'>
                <h2 className='text-3xl font-bold'>We Provide Best Medical Services</h2>
                <p className='text-sm md:px-28'>Your health is our priority. We offer a wide range of advanced medical services designed to meet the needs of patients of all ages. From routine check-ups to specialized treatments, our team uses modern technology, expert knowledge, and a compassionate approach to ensure the best outcomes for you and your loved ones.</p>
            </div>
           
                <div className='grid grid-cols-2 md:flex mt-6 md:justify-center gap-3 md:gap-5'>
                    <div className='bg-white md:w-52 p-6 rounded-xl space-y-3'>
                        <img className='w-10 ' src={doctor} alt="" />
                        <p className='text-3xl font-extrabold' ><CountUp start={0} end={199} duration={50} />+</p>
                        <p className='font-semibold text-gray-500 text-sm'>Total Doctors</p>
                    </div>
                    <div className='bg-white md:w-52 p-6 rounded-xl space-y-3'>
                        <img  className='w-10 ' src={doctor2} alt="" />
                        <p className='text-3xl font-extrabold' ><CountUp start={0} end={467} duration={30} />+</p>
                        <p className='font-semibold text-gray-500 text-sm'>Total Reviews</p>
                    </div>
                    <div className='bg-white md:w-52 p-6 rounded-xl space-y-3'>
                        <img  className='w-10 ' src={doctor3} alt="" />
                        <p className='text-3xl font-extrabold' ><CountUp start={0} end={1900} duration={20} />+</p>
                        <p className='font-semibold text-gray-500 text-sm'>Patients</p>
                    </div>
                    <div className='bg-white md:w-52 p-6 rounded-xl space-y-3'>
                        <img  className='w-10 ' src={doctor4} alt="" />
                        <p className='text-3xl font-extrabold' ><CountUp start={0} end={300} duration={40} />+</p>
                        <p className='font-semibold text-gray-500 text-sm'>Total Stuffs</p>
                    </div>

                </div>
            
        </div>
    );
};

export default MedicalService;