import './vewTransferPay.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../dashboard/Title/Title';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SellerTable from '../../commerce/SellerTable/SellerTable.jsx';
import { getOrderSellerByOrderPayApi } from '../../../helpers/orderPay/getOrderSellerByOrderPay.api.js';
import Load from '../../utils/Load.jsx';

const VewTransferPay = () => {

    const { id } = useParams();
    const [order, setOrder] = useState({ docs: [] });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderSellerByOrderPayApi(id);
            if (response.status === 'success') {
                const obj = { docs: [] };
                obj.docs.push(response.result);
                setOrder(obj)
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [id]);

    return (
        <div className='vewTransferPay'>
            <Title Icon={ViewStreamIcon} name='Orden de Venta' goTo={'/help'} />
            {order.docs.length > 0
                ? <SellerTable values={order} />





                

                : <p>Acá hacer un ticket</p>






            }
            <Load loading={loading} />
        </div>
    );
};

export default VewTransferPay;