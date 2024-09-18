import './commerce.scss';
import Cash from '../Cash/Cash';
import { useState } from 'react';
import Shopping from '../Shopping/Shopping';
import Load from '../../utils/Load';
import Seller from '../Seller/Seller';

const Commerce = ({ user }) => {

    const [vew, setVew] = useState('');
    const [loading, setLoading] = useState(false);
    const [isUnderPay, setIsUnderPay] = useState(null);

    const handleVew = (isVew) => {
        if (isVew === vew) setVew('');
        else setVew(isVew);
    };

    return (
        <div className='commerce'>
            <Cash userId={user._id} setIsUnderPay={setIsUnderPay} />
            <div className='commerceButtons'>
                <button className='btn btnC' onClick={() => handleVew('shopping')}>Compras</button>
                <button className='btn btnC' onClick={() => handleVew('sales')}>ventas</button>
            </div>
            {vew == 'shopping' && <Shopping userId={user._id} setLoading={setLoading} isUnderPay={isUnderPay} />}
            {vew == 'sales' && <Seller userId={user._id} setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default Commerce;