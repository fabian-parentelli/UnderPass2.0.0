import './vewTransferPay.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Title from '../../dashboard/Title/Title';
import AskForMoney from '../AskForMoney/AskForMoney.jsx';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SellerTable from '../../commerce/SellerTable/SellerTable.jsx';
import { getOrderSellerByOrderPayApi } from '../../../helpers/orderPay/getOrderSellerByOrderPay.api.js';

const VewTransferPay = () => {

    const { id } = useParams();
    const [order, setOrder] = useState({ docs: [] });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getOrderSellerByOrderPayApi(id);
            if (response.status === 'success') {
                const obj = { docs: [] };
                obj.docs.push(response.result);
                setOrder(obj)
            };
            setLoading(false);
        }; fetchData();
    }, [id]);

    return (
        <div className='vewTransferPay'>
            <Title Icon={ViewStreamIcon} name='Orden de Venta' goTo={'/help'} />
            {order.docs.length > 0
                ? <SellerTable values={order} />        
                : <AskForMoney id={id} />
            }
            <button className='btn btnA vewTransferPayBtn' onClick={()=> navigate(-1)} >Volver</button>
            <Load loading={loading} />
        </div>
    );
};

export default VewTransferPay;