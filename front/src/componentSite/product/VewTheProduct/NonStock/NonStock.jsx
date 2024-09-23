import './nonStock.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Load from '../../../../component/utils/Load.jsx';
import { useLoginContext } from '../../../../context/LoginContext';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert.jsx';
import { newBookingApi } from '../../../../helpers/booking/newBooking.api.js';
import { getBookingByUidIdTypeApi } from '../../../../helpers/booking/getBookingByUidIdType.api.js';

const NonStock = ({ product }) => {

    const { user } = useLoginContext();
    const navigate = useNavigate();
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [booking, setBooking] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBookingByUidIdTypeApi({ uid: user?.data?._id, id: product._id, type: 'product' });
            if (response.status === 'success') setBooking(true);
        }; fetchData();
    }, []);

    const handleBooking = async () => {
        setLoading(true);
        if (!user.logged) {
            setMessage({ status: 'error', mess: 'Debes iniciar sesión para poder reservar el producto' });
            setOpen(true);
            localStorage.setItem('path', `product/${product._id}`);
            setTimeout(() => { navigate('/login') }, 2000);
        };
        const response = await newBookingApi({ 
            pid: product._id, uid: user.data._id, type: 'product',  country: localStorage.getItem('country') 
        });
        if (response.status === 'success') {
            setBooking(true);
            setMessage({ status: 'success', mess: 'Producto reservado' });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='nonStock'>
            <p className='nonStockRed'>No hay stock</p>

            <button
                onClick={product.inSite ? handleBooking : null}
                className='btn btnA bbProd'
                disabled={!product.inSite || booking}
                style={{ backgroundColor: booking ? '#02635e' : '' }}
            >
                {booking ? 'Reservado' : product.inSite ? 'Reservar' : 'Vendido'}
            </button>

            <SnackbarAlert message={message} open={open} />
            <Load loading={loading} />
        </div>
    );
};

export default NonStock;