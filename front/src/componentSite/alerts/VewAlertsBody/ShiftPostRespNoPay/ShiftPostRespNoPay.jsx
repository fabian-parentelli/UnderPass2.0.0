import './shiftPostRespNoPay.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostponeByIdApi } from '../../../../helpers/shift/getPostponeById.api.js';
import ShiftPostponePanelTab from '../../../../component/shift/calendar/ShiftPostponePanel/ShiftPostponePanelTab/ShiftPostponePanelTab.jsx';

const ShiftPostRespNoPay = ({ id, setLoading, }) => {

    const [postpone, setPostpone] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPostponeByIdApi(id);
            if (response.status === 'success') setPostpone([response.result]);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='shiftPostRespNoPay'>
            <ShiftPostponePanelTab postpones={postpone} />
            <Link to={'/'}>
                <button className='btn btnSH' style={{marginTop: '1rem'}}>Volver</button>
            </Link>
        </div>
    );
};

export default ShiftPostRespNoPay;