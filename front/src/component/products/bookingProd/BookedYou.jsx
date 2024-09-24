import { useEffect, useState } from "react";
import Pager from "../../utils/Pager/Pager.jsx";
import BookingToAdmin from "../../bookings/BookingToAdmin/BookingToAdmin.jsx";
import { getBookingBySeller } from "../../../helpers/booking/getBookingBySeller.api.js";

const BookedYou = ({ userId, setLoading, type }) => {

    const [bookings, setBookings] = useState(null);
    const [pager, setPager] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: userId, type: type };
            if(pager) query.page = pager;
            const response = await getBookingBySeller(query);
            if (response.status === 'success') setBookings(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [pager]);

    const HandleChangePage = (page) => setPager(page);
    
    return (
        <div style={{marginTop: '1rem'}}>
            {bookings && <BookingToAdmin bookings={bookings.docs} />}
            <Pager users={bookings} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default BookedYou;