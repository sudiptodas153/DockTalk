
import React, { useState } from 'react';
import { ImInfo } from 'react-icons/im';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { addBookingDoctor, getBookingDoctor } from '../../../LocalStorage/LocalStorage';
import { toast, ToastContainer } from 'react-toastify';

const DoctorDetails = () => {
    const doctorInfo = useLoaderData();
    const { fee, name, education, availability, speciality, registration_number, workplace, designation, image, id } = doctorInfo;


    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);


    const BookNow = (id) => {
        const storeDoctorInfo = getBookingDoctor();
        if (!storeDoctorInfo.includes(id)) {
            setLoading(true)
            addBookingDoctor(id);
            toast.success(`Appointment scheduled for ${name} successfully`);
            setTimeout(() => {
                navigate('/booking')
            }, 1000)
        }
        else {
            toast.error('Appointment already scheduled for today')
        }

    }


    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  




    return (
        <div className='p-3 md:px-20'>
            <ToastContainer />
            <div className='bg-white md:p-10 p-5 rounded-2xl space-y-4 text-center'>
                <h2 className='text-2xl md:text-3xl font-bold'>Doctor’s Profile Details</h2>
                <p className='text-sm text-gray-600'>Is a highly skilled and experienced, with over years of expertise in the field of. He/She completed from, and is currently practicing at. Dr. is known for a patient-centric approach, accurate diagnosis, and use of modern medical techniques. He/She is fluent in and is committed to providing high-quality care in a compassionate environment.</p>
            </div>

            <div className="md:flex md:items-start mt-10 gap-5 md:gap-7 bg-white md:p-10 p-5 rounded-2xl">
                <div>
                    <img className='md:w-72 md:h-[350px] rounded-xl  bg-green-300' src={image} alt="" />
                </div>

                <div>
                    <div className='space-y-3'>
                        <h2 className='text-2xl md:text-3xl font-bold'>{name}</h2>
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
                    <div className='md:w-[600px] mb-3 border-b-2 border-dashed border-gray-300 '></div>



                    <div className='md:flex items-center gap-7'>
                        <p className='font-bold mt-3'>Availability</p>

                        <div className='flex gap-2 mt-3'>
                            {
                                availability.map(day =>

                                    <div key={day} className='flex text-xs'>
                                        <p className='border-1 border-amber-100 font-bold text-amber-400 bg-amber-50 py-1 px-2 md:py-2 md:px-4 rounded-2xl'>{day}</p>

                                    </div>


                                )
                            }
                        </div>
                    </div>

                    <div className='md:flex items-center gap-3 mt-4'>
                        <p className='text-sm font-bold'>Consultation Fee:</p>
                        <p className='text-sm text-green-600 font-bold'>Taka: {fee} <span className='text-gray-400'>(incl. Vat)</span> <span className='text-green-500'>Per consultation</span></p>
                    </div>
                </div>
            </div>

            <div className='bg-white md:p-10 p-5 rounded-2xl mt-10'>
                <div className='text-center border-b-2 border-dashed pb-5 border-gray-300'>
                    <h2 className='text-2xl font-bold'>Book an Appointment</h2>
                </div>

                <div className='flex items-center justify-between pb-4 mt-4 border-b-2 border-gray-200'>
                    <p className='text-sm font-bold'>Availability</p>
                    {
                         availability[0] === dayName || availability[1] === dayName || availability[2] === dayName ?
                         <p className='text-xs text-green-500 bg-green-100 border-1 border-gray-100 py-1 px-3 rounded-2xl'>Doctor Available Today</p>
                         : 
                         <p className='text-xs text-red-500 bg-red-100 border-1 border-gray-100 py-1 px-3 rounded-2xl'>Doctor Unavailable Today</p>

                    }
                   
                </div>



                <div className='mt-4'>
                    <p className='md:flex items-center md:w-[820px] gap-1 text-xs text-yellow-500 bg-yellow-50 py-2 px-4 rounded-2xl'><ImInfo></ImInfo>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                    <button onClick={() => BookNow(id)} className='btn rounded-3xl w-full mt-8 bg-green-600 text-white font-semibold'> {loading ? 'Booking...' : 'Book Appointment Now'}</button>
                </div>

            </div>



        </div>
    );
};

export default DoctorDetails;