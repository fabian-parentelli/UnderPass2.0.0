import './allOrders.scss';
import { useState } from 'react';
import Load from '../../../../component/utils/Load';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Title from '../../../../component/dashboard/Title/Title';
import ShopingAllOrder from './ShopingAllOrder/ShopingAllOrder';
import SellerOrders from './SellerOrders/SellerOrders';

const AllOrders = () => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleInfo = (id) => setVew(vew === id ? null : id);

    return (
        <div className='allOrders'>
            <Title Icon={ListAltIcon} name='Todas las ordenes' />
            <div className='allOrdersBtn'>
                <button className='btn btnA' onClick={() => handleInfo(1)}>Compra</button>
                <button className='btn btnB' onClick={() => handleInfo(2)}>Venta</button>
            </div>
            {vew === 1 && <ShopingAllOrder setLoading={setLoading} />}
            {vew === 2 && <SellerOrders setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default AllOrders;