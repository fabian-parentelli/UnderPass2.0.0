import './shopping.scss';
import { useEffect, useState } from 'react';
import Pager from '../../utils/Pager/Pager.jsx';
import ShopingTable from '../ShopingTable/ShopingTable.jsx';
import { getOrdersApi } from '../../../helpers/orders/getOrderByUser.api.js';

const Shopping = ({ userId, setLoading }) => {

    const [orders, setOrders] = useState(null);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: userId, active: true }
            if (page) query.page = page;
            const response = await getOrdersApi(query);
            if (response.status) setOrders(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const HandleChangePage = async (page) => setPage(page);

    return (
        <div className='shopping'>
            {orders && <ShopingTable orders={orders} />}
            <div className='shoppingPagger'><Pager users={orders} HandleChangePage={HandleChangePage} /></div>
        </div>
    );
};

export default Shopping;