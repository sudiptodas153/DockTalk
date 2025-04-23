
import { useLoaderData } from 'react-router';

const Blogs = () => {

    const blogs = useLoaderData()
    



    return (
        <div className='container mx-auto p-5'>
            <h2 className='text-center text-3xl font-bold my-3'>Blogs</h2>
            {
                blogs.map(blog=> <div key={blog.question} className='bg-white mt-4 p-5 rounded-2xl'>
                    <h2 className='font-bold text-xl md:text-xl'><span className='font-extrabold text-2xl'>Question:</span> {blog.question}</h2>
                    <h2 className='mt-3 text-sm text-gray-600'><span className='font-extrabold text-black text-[18px]'>Answer:</span> {blog.answer}</h2>
                </div>)
            }
            
        </div>
    );
};

export default Blogs;