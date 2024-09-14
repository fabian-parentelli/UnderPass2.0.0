import './lastCash.scss';
import { useEffect, useState } from 'react';
import LoadSmallB from '../../utils/LoadSmallB/LoadSmallB.jsx';
import { getLastCashApi } from '../../../helpers/cash/getLastCash.api.js';

const LastCash = () => {

    const [cash, setCash] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLastCashApi();
            if (response.status === 'success') setCash(response.result);
            else setCash({ AR: { cash: 0, treasure: 0 }, UY: { cash: 0, treasure: 0 } });
        }; fetchData();
    }, []);

    return (
        <div className='lastCash'>
            {!cash
                ? <div className='lastCashLoad'><LoadSmallB /></div>
                : <div className='lastCashCont'>
                    <div className='lastCashContL'>
                        <p>Caja: <span>${cash.AR.cash}</span> ar</p>
                        <p>Tesoro: <span>${cash.AR.treasure}</span> ar</p>
                        <p>Credito: <span style={{ color: 'red' }}>${cash.AR.treasure - cash.AR.cash}</span> ar</p>
                    </div>
                    <div className='lastCashContR'>
                        <p>Caja: <span>${cash.UY.cash}</span> uy</p>
                        <p>Tesoro: <span>${cash.UY.treasure}</span> uy</p>
                        <p>Credito: <span style={{ color: 'red' }}>${cash.UY.treasure - cash.UY.cash}</span> uy</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default LastCash;