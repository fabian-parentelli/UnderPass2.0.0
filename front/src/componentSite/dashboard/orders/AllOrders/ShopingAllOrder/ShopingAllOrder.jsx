import './shopingAllOrder.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { getOrdersApi } from '../../../../../helpers/orders/getOrderByUser.api.js';
import ShopingTable from '../../../../../component/commerce/ShopingTable/ShopingTable.jsx';

const ShopingAllOrder = ({ setLoading }) => {

    const [orders, setOrders] = useState(null);
    const [isPaid, setIsPaid] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrdersApi({pay: isPaid});
            if (response.status === 'success') setOrders(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [isPaid]);

    const handleSwitchChange = (event) => setIsPaid(event.target.checked);

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
        </div>
    );
};

export default ShopingAllOrder;