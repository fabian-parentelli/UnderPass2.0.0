import './shiftPostponePanel.scss';
import { useEffect, useState } from 'react';
import SnackbarAlert from '../../../utils/SnackbarAlert.jsx';
import ShiftPostponePanelTab from './ShiftPostponePanelTab/ShiftPostponePanelTab.jsx';
import { getPostponesByAdminIdApi } from '../../../../helpers/shift/getPostponesByAdminId.api.js';

const ShiftPostponePanel = ({ userId, setLoading }) => {

    const [postpones, setPostpones] = useState([]);
    const [active, setActive] = useState(true);
    const [alert, setAlert] = useState({ message: { status: '', mess: '' }, open: false });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (alert.open === true) setAlert({ message: { status: '', mess: '' }, open: false });
            const response = await getPostponesByAdminIdApi(userId, active);
            if (response.status === 'success') {
                if (response.result.length > 0) setPostpones(response.result);
                else {
                    setPostpones([]);
                    setAlert({ message: { status: 'error', mess: 'No hay propuestas' }, open: true });
                };
            } else setAlert({ message: { status: 'error', mess: response.error }, open: true });
            setLoading(false);
            setTimeout(() => { setAlert({ message: { status: '', mess: '' }, open: false }); }, 4000);
        }; fetchData();
    }, [active]);

    return (
        <div className='shiftPostponePanel'>
            <p>Propuestas de posponer o suspender.</p>
            <select onChange={(e) => setActive(e.target.value)}>
                <option value="true">Por confirmar</option>
                <option value="false">Confirmadas</option>
            </select>
            <ShiftPostponePanelTab postpones={postpones} />
            <SnackbarAlert message={alert.message} open={alert.open} />
        </div>
    );
};

export default ShiftPostponePanel;