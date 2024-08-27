import './shopingAllOrder.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { getOrdersApi } from '../../../../../helpers/orders/getOrderByUser.api.js';
import ShopingTable from '../../../../../component/commerce/ShopingTable/ShopingTable.jsx';
import Pager from '../../../../../component/utils/Pager/Pager.jsx';

const ShopingAllOrder = ({ setLoading }) => {

    const [orders, setOrders] = useState(null);
    const [isPaid, setIsPaid] = useState(true);
    const [page, setPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { pay: isPaid };
            if (page) query.page = page;
            const response = await getOrdersApi(query);
            if (response.status === 'success') setOrders(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [isPaid, page]);

    const handleSwitchChange = (event) => setIsPaid(event.target.checked);
    const handleChangePage = (page) => setPage(page);

    return (
        <div className='shopingAllOrder'>
            <div className='shopingAllOrderDiv'>
                <h2>Ordenes de compra</h2>
                <div className='shopingAllOrderSwitch'>
                    <p>Pago: NO</p>
                    <Switch defaultChecked onChange={handleSwitchChange} />
                    <p>SI</p>
                </div>
            </div>
            <ShopingTable orders={orders} />
            <div style={{marginTop: '2rem'}}></div>
            <Pager users={orders} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default ShopingAllOrder;