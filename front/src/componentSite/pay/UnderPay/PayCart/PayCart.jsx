import './payCart.scss';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UnderMoney from '../../../../component/pay/UnderMoney/UnderMoney';
import { getOrderByIdApi } from '../../../../helpers/orders/getOrderById.api.js';
import { newUnderPayApi } from '../../../../helpers/pay/newUnderPay.api.js';

const PayCart = ({ orderId, setLoading }) => {

    const [order, setOrder] = useState(null);

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
        const response = await newUnderPayApi({ orderId: orderId });
        console.log(response);
        

        // Volvemos .........


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
        </div>
    );
};

export default PayCart;