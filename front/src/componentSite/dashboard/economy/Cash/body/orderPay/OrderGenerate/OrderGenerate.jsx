import './orderGenerate.scss';
import { useEffect, useState } from 'react';
import Pager from '../../../../../../../component/utils/Pager/Pager.jsx';
import SellerTable from '../../../../../../../component/commerce/SellerTable/SellerTable.jsx'
import { getOrderSellerToPayApi } from '../../../../../../../helpers/orderSeller/getOrderSellerToPay.api.js';
import { generateOrderPayApi } from '../../../../../../../helpers/orderPay/generateOrderPay.api.js';

const OrderGenerate = ({ country, setLoading, setGenerate }) => {

    const [values, setValues] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderSellerToPayApi(page);
            if (response.status === 'success') setValues(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const HandleChangePage = async (newPage) => { if (newPage !== page) setPage(newPage) };

    const generateOrdenPay = async (id) => {
        setLoading(true)
        const response = await generateOrderPayApi({ country: country, id: id });
        if (response.status === 'success') setGenerate(false);
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='orderGenerate'>
            {values && <SellerTable values={values} inWallet={true} generateOrdenPay={generateOrdenPay} />}
            <Pager users={values} HandleChangePage={HandleChangePage} />
        </div>
    );
};

export default OrderGenerate;