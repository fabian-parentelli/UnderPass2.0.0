import './bookingProd.scss';
import { useEffect, useState } from 'react';
import Pager from '../../utils/Pager/Pager.jsx';
import BookingTable from '../../bookings/BookingTable.jsx';
import { getBookingApi } from '../../../helpers/booking/getBookingByUserId.api.js';
import { updActiveBookingApi } from '../../../helpers/booking/updActiveBooking.api.js';

const BookingProd = ({ userId, setLoading }) => {

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

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveBookingApi(id);
        if (response.status === 'success') {
            const newProducts = [...products.docs];
            const filteredProducts = newProducts.filter(prod => prod._id !== response.result._id);
            setProducts(prevState => ({ ...prevState, docs: filteredProducts }));
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='bookingProd'>
            {products && <BookingTable products={products.docs} handleActive={handleActive} />}
            <Pager users={products} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default BookingProd;