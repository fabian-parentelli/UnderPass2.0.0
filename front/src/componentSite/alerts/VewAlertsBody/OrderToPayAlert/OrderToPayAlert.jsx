import './OrderToPayAlert.scss';
import { useEffect, useState } from 'react';
import { getOrderPayByIdApi } from '../../../../helpers/orderPay/getOrderById.api.js';
import OrderPayTable from '../../../dashboard/economy/Cash/body/orderPay/OrderPayTable/OrderPayTable';

const OrderToPayAlert = ({ id, setLoading }) => {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderPayByIdApi(id);
            if(response.status === 'success') setOrders(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='OrderToPayAlert'>
           {orders && <OrderPayTable orders={orders.docs} />}
        </div>
    );
};

export default OrderToPayAlert;