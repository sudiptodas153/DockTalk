import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookingDoctor } from '../../LocalStorage/LocalStorage';
import BookingDetails from '../BookingDetails/BookingDetails';
import { HiH2 } from 'react-icons/hi2';

const MyBooking = () => {
    const data = useLoaderData()
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const storeData = getBookingDoctor();
        const convertData = storeData.map(id => parseInt(id));
        const bookingList = data.filter(doctor => convertData.includes(doctor.id));
        setBookList(bookingList)

    }, [])

    return (
        <div className='container mx-auto'>
            <div className='text-center mt-10'>
                <h2 className='text-2xl font-bold md:text-3xl'>My Today Appointments</h2>
                <p className='text-sm text-gray-600 mt-2 px-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div>
                {bookList.map(list => <BookingDetails key={list.id} list={list}></BookingDetails>)
                }
            </div>
        </div>
    );
};

export default MyBooking;