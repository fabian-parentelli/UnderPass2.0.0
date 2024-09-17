import './soldProductAlert.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerTable from '../../../../component/commerce/SellerTable/SellerTable';
import { getOrderSellerApi } from '../../../../helpers/orderSeller/getOrderSeller.api.js';

const SoldProductAlert = ({ id, setLoading }) => {

    const [order, setOrder] = useState(null);
    const navigate = useNavigate();

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
            <button
                className='btn btnA'
                style={{ marginTop: '2rem' }}
                onClick={() => navigate(-1)}
            >
                Volver</button>
        </div>
    );
};

export default SoldProductAlert;