import { toast } from "react-toastify";

const getBookingDoctor = () => {
    const storeBooking = localStorage.getItem("bookingDoctor");
    if (storeBooking) {
        const bookingData = JSON.parse(storeBooking);
        return bookingData;
    }
    else {
        return [];
    }
}


const addBookingDoctor = (id) => {
    const storeDoctorInfo = getBookingDoctor();
    if (storeDoctorInfo.includes(id)) {
        toast.error('Appointment already scheduled for today')
    }
    else {

        storeDoctorInfo.push(id);
        const data = JSON.stringify(storeDoctorInfo);

        localStorage.setItem("bookingDoctor", data)
    }
}


const removeBooking = (id) => {
    const storeDoctorInfo = getBookingDoctor();
    const updatedDoctorInfo = storeDoctorInfo.filter(docId => docId.id !== id);
    localStorage.setItem("bookingDoctor", JSON.stringify(updatedDoctorInfo));
};


export { addBookingDoctor, getBookingDoctor, removeBooking };