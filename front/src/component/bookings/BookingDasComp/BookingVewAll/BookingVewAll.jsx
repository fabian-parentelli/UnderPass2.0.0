import './bookingVewAll.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../utils/Pager/Pager.jsx';
import BookingToAdmin from '../../BookingToAdmin/BookingToAdmin.jsx';
import { getBookingToAdminApi } from '../../../../helpers/booking/getBookingToAdmin.api.js';

const BookingVewAll = ({ type, setLoading }) => {

    const [bookings, setBookings] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { type: type };
            if (page) query.page = page;
            const response = await getBookingToAdminApi({ type: type });
            if (response.status === 'success') setBookings(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const HandleChangePage = (page) => setPage(page);

    return (
        <div className='bookingVewAll'>
            {bookings && <BookingToAdmin bookings={bookings.docs} />}
            <Pager users={bookings} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default BookingVewAll;