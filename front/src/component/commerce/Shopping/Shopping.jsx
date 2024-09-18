import './shopping.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import Pager from '../../utils/Pager/Pager.jsx';
import ShopingTable from '../ShopingTable/ShopingTable.jsx';
import { getOrdersApi } from '../../../helpers/orders/getOrders.api.js';

const Shopping = ({ userId, setLoading, isUnderPay }) => {

    const [orders, setOrders] = useState(null);
    const [isPaid, setIsPaid] = useState(false);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: userId, active: true, pay: isPaid };
            if (page) query.page = page;
            const response = await getOrdersApi(query);
            if (response.status) setOrders(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [page, isPaid]);

    const handleSwitchChange = (event) => setIsPaid(event.target.checked);
    const HandleChangePage = async (page) => setPage(page);

    return (
        <div className='shopping'>
            <div className='shopingAllOrderSwitch'>
                <p>Pago: NO</p>
                <Switch onChange={handleSwitchChange} />
                <p>SI</p>
            </div>
            {orders && <ShopingTable orders={orders} isUnderPay={isUnderPay} />}
            <div className='shoppingPagger'><Pager users={orders} HandleChangePage={HandleChangePage} /></div>
        </div>
    );
};

export default Shopping;