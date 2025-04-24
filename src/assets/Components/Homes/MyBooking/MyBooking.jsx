import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getBookingDoctor, removeBooking } from '../../LocalStorage/LocalStorage';
import BookingDetails from '../BookingDetails/BookingDetails';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';

const MyBooking = () => {
    const data = useLoaderData()
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const storeData = getBookingDoctor();
        const convertData = storeData.map(id => parseInt(id));
        const bookingList = data.filter(doctor => convertData.includes(doctor.id));
        setBookList(bookingList)

    }, [data])




    const removeData = id => {
        removeBooking(id)
        const remaining = bookList.filter(book => book.id !== id)
        setBookList(remaining)
        toast.error('Appointment Cancel')
    }


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };



    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div>
            <ToastContainer />
            {
                bookList.length === 0 ?
                    <div className='text-center space-y-6 mt-8 h-[200px] '>
                        <h2 className='text-3xl font-bold'>You have not Booked any appointment yet</h2>
                        <p className='text-sm text-gray-500'>You currently have no appointments scheduled. Book one now to get started!</p>
                        <Link to={'/'}><button className='btn bg-green-600 text-white'>Book An Appointment</button></Link>
                    </div>
                    :
                    <div className='container mx-auto'>
                        <div className='text-center mt-10'>
                            <div className='flex justify-center items-center my-6 p-6'>
                                <div className='w-full h-[400px] px-2 md:p-5 bg-white'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart width={800} height={400}
                                            data={bookList}>

                                            <XAxis dataKey="name" />
                                            <YAxis></YAxis>
                                            <Tooltip></Tooltip>
                                            <Bar dataKey="fee" fill='#8884d8' shape={<TriangleBar />}  ></Bar>

                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className='mt-4 md:mt-20'>
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