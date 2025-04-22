import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookingDoctor, removeBooking } from '../../LocalStorage/LocalStorage';
import BookingDetails from '../BookingDetails/BookingDetails';
import { HiH2 } from 'react-icons/hi2';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MyBooking = () => {
    const data = useLoaderData()
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const storeData = getBookingDoctor();
        const convertData = storeData.map(id => parseInt(id));
        const bookingList = data.filter(doctor => convertData.includes(doctor.id));
        setBookList(bookingList)

    }, [])
    console.log(bookList)



    const removeData = id => {
        removeBooking(id)
        const remaining = bookList.filter(book => book.id !== id)
        setBookList(remaining)
    }



    return (
        <div>
            {
                bookList.length === 0 ? 'hi' :
                    <div className='container mx-auto'>
                        <div className='text-center mt-10'>
                            <div className='flex justify-center items-center my-6'>
                                <div className=''>
                                    <BarChart width={800}
                                        height={400}
                                        data={bookList}>
                                        <XAxis dataKey="name" />
                                        <YAxis></YAxis>
                                        <Bar dataKey="fee" fill="yellow" ></Bar>

                                    </BarChart>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold md:text-3xl'>My Today Appointments</h2>
                                <p className='text-sm text-gray-600 mt-2 px-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                            </div>
                        </div>
                        <div>
                            {bookList.map(list => <BookingDetails removeData={removeData} key={list.id} list={list}></BookingDetails>)
                            }
                        </div>

                    </div>
            }
        </div>
    );
};

export default MyBooking;