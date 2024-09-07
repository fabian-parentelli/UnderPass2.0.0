import { useEffect, useState } from 'react';
import './soldProductAlert.scss';
import { getOrderSellerApi } from '../../../../helpers/orderSeller/getOrderSeller.api';
import SellerTable from '../../../../component/commerce/SellerTable/SellerTable';

const SoldProductAlert = ({ id, setLoading }) => {

    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderSellerApi({ id: id });
            if (response.status === 'success') setOrder(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='soldProductAlert'>
            {order && <SellerTable values={order} />}
        </div>
    );
};

export default SoldProductAlert;