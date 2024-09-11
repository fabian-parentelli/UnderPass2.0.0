import './askForMoney.scss';
import { useEffect, useState } from 'react';
import { getOrderPayByIdApi } from '../../../helpers/orderPay/getOrderById.api.js';
import OrderPayTable from '../../../componentSite/dashboard/economy/Cash/body/orderPay/OrderPayTable/OrderPayTable.jsx';

const AskForMoney = ({ id }) => {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getOrderPayByIdApi(id);
            if(response.status === 'success') setOrders(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <div className='askForMoney'>
            {orders && <OrderPayTable orders={orders.docs} />}
        </div>
    );
};

export default AskForMoney;