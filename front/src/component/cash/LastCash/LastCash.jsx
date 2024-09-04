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
                        <p>Caja: ${cash.AR.cash} ar</p>
                        <p>Tesoro: ${cash.AR.treasure} ar</p>
                    </div>
                    <div className='lastCashContR'>
                        <p>Caja: ${cash.UY.cash} uy</p>
                        <p>Tesoro: ${cash.UY.treasure} uy</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default LastCash;