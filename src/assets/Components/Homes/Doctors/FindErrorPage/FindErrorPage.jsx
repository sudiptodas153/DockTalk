import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FiPlusCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router';

const FindErrorPage = () => {
    const {id} = useParams();
    return (
        <div className='bg-white text-center mt-10 px-3 space-y-3 py-10 mx-3 rounded-2xl'>
           <h2 className='text-3xl font-bold'>No Doctor Found!!</h2>
           <p className='text-gray-500'>No Doctor Found with this registration No-</p>
           <p className='text-gray-500  font-bold flex gap-1 items-center justify-center'><FiPlusCircle size={20} color='gray'/> {id}</p>
          <Link to={'/'}> <button className='btn bg-blue-600 text-white'>View All Doctors</button></Link>
        </div>
    );
};

export default FindErrorPage;