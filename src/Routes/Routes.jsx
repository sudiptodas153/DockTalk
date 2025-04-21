import { createBrowserRouter } from "react-router";
import Root from "../assets/Components/Root/Root";
import ErrorPage from "../assets/Components/ErrorPage/ErrorPage";
import Home from "../assets/Components/Homes/Home/Home";
import MyBooking from "../assets/Components/Homes/MyBooking/MyBooking";
import Blogs from "../assets/Components/Homes/Blogs/Blogs";
import Contact from "../assets/Components/Homes/Contact/Contact";
import DoctorDetails from "../assets/Components/Homes/Doctors/DoctorDetails/DoctorDetails";
import FindErrorPage from "../assets/Components/Homes/Doctors/FindErrorPage/FindErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/Doctor.json'),
                Component: Home,
            },
            {
                path: 'booking',
                loader: () => fetch('/Doctor.json'),
                Component: MyBooking
            },
            {
                path: 'blogs',
                Component: Blogs
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'doctorDetails/:id',
                loader: async({params}) => {
                 const res = await  fetch('/Doctor.json');
                 const data = await res.json();
                 const singleData = data.find(item => item.id == params.id)
                 return singleData;

                },
                errorElement: <FindErrorPage></FindErrorPage>,
                Component: DoctorDetails
            }

        ]
    },
]);