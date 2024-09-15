import './orderPayDas.scss';
import { useEffect, useState } from 'react';
import OrderGenerate from '../OrderGenerate/OrderGenerate.jsx';
import OrderPayTable from '../OrderPayTable/OrderPayTable.jsx';
import FilterOrderPay from '../FilterOrderPay/FilterOrderPay.jsx';
import UploadOrderPay from '../UploadOrdrePay/UploadOrderPay.jsx';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import { getOrderPayApi } from '../../../../../../../helpers/orderPay/getOrderPay.api.js';

const OrderPayDas = ({ country, setLoading }) => {

    const [orders, setOrders] = useState(null);
    const [page, setPage] = useState(1);
    const [querys, setQuerys] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [vew, setVew] = useState(false);
    const [generate, setGenerate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!generate) {
                setLoading(true);
                const query = { country: country, pay: false };
                if (page) query.page = page;
                if (querys) { query.userid = querys, query.limit = 100 };
                const response = await getOrderPayApi(query);
                if (response.status === 'success') setOrders(response.result);
                else console.error(response.error);
                setLoading(false);
            };
        }; fetchData();
    }, [page, querys, generate]);

    const HandleChangePage = (page) => setPage(page);

    return (
        <div className='orderPayDas'>
            {orders && !vew ?
                <>
                    <FilterOrderPay country={country} setQuerys={setQuerys} setVew={setVew} selectedIds={selectedIds} orders={orders.docs} setGenerate={setGenerate} generate={generate} />
                    {!generate ?
                        <>
                            <OrderPayTable orders={orders.docs} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
                            <Pager users={orders} HandleChangePage={HandleChangePage} />
                        </>
                        : <OrderGenerate country={country} setLoading={setLoading} setGenerate={setGenerate} />
                    }
                </>
                : <UploadOrderPay selectedIds={selectedIds} setLoading={setLoading} />
            }
        </div>
    );
};

export default OrderPayDas;