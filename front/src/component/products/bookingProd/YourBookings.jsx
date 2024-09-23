import { useEffect, useState } from 'react';
import { getBookingApi } from '../../../helpers/booking/getBooking.api.js';
import Pager from '../../utils/Pager/Pager.jsx';
import BookingTable from '../../bookings/BookingTable/BookingTable.jsx';

const YourBookings = ({ userId, setLoading }) => {

    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: userId, type: 'product', active: true };
            if (page) query.page = page;
            const response = await getBookingApi(query);
            if (response.status === 'success') setProducts(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const handleChangePage = (page) => setPage(page);

    return (
        <div className='YourBookings'>
            {products && <BookingTable products={products.docs} setProducts={setProducts} setLoading={setLoading} />}
            <Pager users={products} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default YourBookings;