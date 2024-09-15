import './payCart.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UnderMoney from '../../../../component/pay/UnderMoney/UnderMoney';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert.jsx';
import { newUnderPayApi } from '../../../../helpers/pay/newUnderPay.api.js';
import { getOrderByIdApi } from '../../../../helpers/orders/getOrderById.api.js';

const PayCart = ({ orderId, setLoading }) => {

    const [order, setOrder] = useState(null);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderByIdApi(orderId);
            if (response.status === 'success') setOrder(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleClick = async () => {
        setLoading(true);
        const response = await newUnderPayApi({ orderId: orderId });
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Compra exitosa' });
            setLoading(false);
            setOpen(true);
        } else {
            setMessage({ status: 'error', mess: response.error });
            setLoading(false);
            setOpen(true);
        };
        setTimeout(() => { setOpen(false); navigate('/') }, 2000);
    };

    return (
        <div className='payCart'>
            <div className='payCartYourMoney'>
                <p>Tu dinero:</p>
                {order && <p className='payCartYourMoneyNUmber'><UnderMoney userId={order.userId} /></p>}
            </div>
            {order &&
                <>
                    <div className='payCartYourCart'>
                        <ShoppingCartIcon />
                        <p>Compra n°</p>
                    </div>
                    <p className='payCartYourId'>{order._id}</p>
                    <p>Monto a pagar: <span style={{ color: 'red' }}>${order.total}</span></p>
                    <button className='btn btnE' onClick={handleClick}>Pagar</button>
                </>
            }
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default PayCart;