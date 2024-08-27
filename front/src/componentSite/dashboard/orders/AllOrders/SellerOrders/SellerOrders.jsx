import './sellerOrders.scss';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import Pager from '../../../../../component/utils/Pager/Pager';
import SellerTable from '../../../../../component/commerce/SellerTable/SellerTable';
import { getOrderSellerApi } from '../../../../../helpers/orderSeller/getOrderSeller.api.js';

const SellerOrders = ({ setLoading }) => {

    const [values, setValues] = useState(null);
    const [page, setPage] = useState(null);
    const [pay, setPay] = useState({ payIn: true, payOut: false });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = pay;
            if (page) query.page = page;
            const response = await getOrderSellerApi(query);
            if (response.status === 'success') setValues(response.result);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, [page, pay]);

    const handleChangePage = (page) => setPage(page);

    const handleChangePay = (event) => {
        const { name, checked } = event.target;
        setPay((prevPay) => ({ ...prevPay, [name]: checked }))
    };

    return (
        <div className='sellerOrders'>
            <div className='sellerOrdersTop'>
                <h2>Ordenes de venta</h2>
                <div>
                    <p>Pagado NO</p>
                    <Switch
                        name="payIn"
                        checked={pay.payIn}
                        onChange={handleChangePay}
                    />
                    <p>SI</p>
                </div>
                <div>
                    <p>Cobrado No</p>
                    <Switch
                        name="payOut"
                        checked={pay.payOut}
                        onChange={handleChangePay}
                    />
                    <p>SI</p>
                </div>
            </div>
            <div style={{ marginTop: '1rem' }}></div>
            {values && <SellerTable values={values} />}
            <div className='sellerOrdersPager'><Pager users={values} HandleChangePage={handleChangePage} /></div>
        </div>
    );
};

export default SellerOrders;