import './productInStock.scss';
import { useEffect, useState } from 'react';
import { getBookingApi } from '../../../../helpers/booking/getBooking.api.js';
import BookingTable from '../../../../component/bookings/BookingTable/BookingTable';

const ProductInStock = ({ id, setLoading }) => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getBookingApi({ id: id });
            if (response.status === 'success') setProducts(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='productInStock'>
            {products && <BookingTable products={products.docs} setProducts={setProducts} setLoading={setLoading} />}
        </div>
    );
};

export default ProductInStock;