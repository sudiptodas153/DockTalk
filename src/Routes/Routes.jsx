import { createBrowserRouter } from "react-router";
import Root from "../assets/Components/Root/Root";
import ErrorPage from "../assets/Components/ErrorPage/ErrorPage";
import Home from "../assets/Components/Homes/Home/Home";
import MyBooking from "../assets/Components/Homes/MyBooking/MyBooking";
import Blogs from "../assets/Components/Homes/Blogs/Blogs";
import Contact from "../assets/Components/Homes/Contact/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('Doctor.json'),
                Component: Home,
            },
            {
                path: 'booking',
                Component: MyBooking
            },
            {
                path: 'blogs',
                Component: Blogs
            },
            {
                path: 'contact',
                Component: Contact
            }
            
        ]
    },
]);