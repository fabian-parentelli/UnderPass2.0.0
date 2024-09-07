import './orderPayDas.scss';
import { useEffect, useState } from 'react';
import OrderPayTable from '../OrderPayTable/OrderPayTable.jsx';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import { getOrderPayApi } from '../../../../../../../helpers/orderPay/getOrderPay.api.js';

const OrderPayDas = ({ country, setLoading }) => {

    const [orders, setOrders] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { country: country, pay: false };
            if (page) query.page = page;
            const response = await getOrderPayApi(query);

            console.log(response);
            

            if (response.status === 'success') setOrders(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const HandleChangePage = (page) => setPage(page);

    // Hacer que si hago clik en paho que me lleve a un lugart en donde cargar los datos de los pagos.
    // Luego de eso conectarlo con la base de datos y a laburar !!!!!!

    return (
        <div className='orderPayDas'>
            {orders &&
                <>
                    <OrderPayTable orders={orders.docs} />
                    <div className='orderPayDasPage'>
                        <Pager users={orders} HandleChangePage={HandleChangePage} />
                    </div>
                </>
            }
        </div>
    );
};

export default OrderPayDas;