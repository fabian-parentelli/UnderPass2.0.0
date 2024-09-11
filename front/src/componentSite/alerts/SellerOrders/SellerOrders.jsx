import './sellerOrders.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderSellerApi } from '../../../helpers/orderSeller/getOrderSeller.api.js';
import Load from '../../../component/utils/Load.jsx';
import SellerTable from '../../../component/commerce/SellerTable/SellerTable.jsx';
import Title from '../../../component/dashboard/Title/Title.jsx';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const SellerOrders = () => {

    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderSellerApi({ id: id });
            if (response.status === 'success') setOrder(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [id]);

    return (
        <div className='sellerOrders'>
            <Title Icon={ViewStreamIcon} name='Orden de venta' goTo={'/help'} />
            <div style={{marginTop: '2rem'}}>
                <SellerTable values={order} />
            </div>
            <Load loading={loading} />
        </div>
    );
};

export default SellerOrders;