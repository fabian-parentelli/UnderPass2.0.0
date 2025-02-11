import './cleanAlerts.scss';
import { useEffect, useState } from 'react';
import SnackbarAlert from '../../../../../component/utils/SnackbarAlert';
import AlertsForm from '../../../../../component/alerts/AlertsForm/AlertsForm.jsx';
import { newDataPassApi } from '../../../../../helpers/dataPass/newDataPass.api.js';
import { deleteAlertsApi } from '../../../../../helpers/alerts/deleteAlerts.api.js';
import { updMaxCountConfApi } from '../../../../../helpers/dataPass/updMaxCount.api.js';
import { delAllPostponesApi } from '../../../../../helpers/shift/postpone/deleManyPostpone.api.js';
import { deleteAllAlertsApi } from '../../../../../helpers/alerts/deleteAllAlerts.api.js';
import { deletePostponeByIdApi } from '../../../../../helpers/shift/postpone/deletePostponeById.api.js';
import { getMaxCounterByTypeApi } from '../../../../../helpers/dataPass/getMaxCounterByType.api.js';
import ShiftPostponePanelTab from '../../../../../component/shift/calendar/ShiftPostponePanel/ShiftPostponePanelTab/ShiftPostponePanelTab.jsx';
import ShiftTableConfig from '../../../../../component/shift/ShiftTableForConfig/ShiftTableConfig.jsx';
import { deleteShiftByIdApi } from '../../../../../helpers/shift/deleShiftById.api.js';
import { deleteAllShiftsApi } from '../../../../../helpers/shift/deleteAllShifts.api.js';

const CleanAlerts = ({ setLoading, type }) => {
    
    const [days, setDays] = useState({ type: type, maxCount: 0 });
    const [snack, setSnack] = useState({ message: { status: '', mess: '' }, open: false });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setSnack({ message: { status: '', mess: '' }, open: false })
            const response = await getMaxCounterByTypeApi(type);
            if (response.status === 'success') setDays(response.result);
            else setSnack({ message: { status: 'error', mess: response.error }, open: true });
            setSnack({ message: { status: '', mess: '' }, open: false });
            setLoading(false);
        }; fetchData();
    }, [type]);

    const handleUpdateDays = async () => {
        setLoading(true);
        if (snack.open) setSnack({ message: { status: '', mess: '' }, open: false });
        let response;
        if (!days._id) response = await newDataPassApi(days);
        else response = await updMaxCountConfApi(days);
        if (response.status === 'success') setSnack({ message: { status: 'success', mess: 'Día modificado' }, open: true });
        else setSnack({ message: { status: 'error', mess: response.error }, open: true });
        setLoading(false);
        setSnack({ message: { status: '', mess: '' }, open: false });
    };

    const handleDeleteAlertById = async (id) => {
        if (snack.open) setSnack({ message: { status: '', mess: '' }, open: false });
        setLoading(true);
        let response;
        if (type === 'maxAlert') response = await deleteAlertsApi(id);
        if (type === 'maxPostp') response = await deletePostponeByIdApi(id);
        if (type === 'maxShift') response = await deleteShiftByIdApi(id);
        if (response.status === 'success') {
            const data = { ...days };
            const result = data.countData.defeated.filter(def => def._id !== id);
            setDays({ ...days, countData: { ...days.countData, defeated: result, total: days.countData.total - 1 } });
        } else setSnack({ message: { status: 'error', mess: response.error }, open: true });
        setLoading(false);
    };

    const handleDeleteAll = async () => {
        setLoading(true);
        if (snack.open) setSnack({ message: { status: '', mess: '' }, open: false });
        if (!days.countData.defeated) {
            setSnack({ message: { status: 'error', mess: 'No hay nada que eliminar' }, open: true });
            return;
        };
        const ids = days.countData.defeated.map(data => data._id)
        let response;
        if (type === 'maxAlert') response = await deleteAllAlertsApi({ ids: ids });
        if (type === 'maxPostp') response = await delAllPostponesApi({ ids: ids });
        if (type === 'maxShift') response = await deleteAllShiftsApi({ ids: ids });
        if (response.status === 'success') {
            setSnack({ message: { status: 'success', mess: 'Todo ha sido eliminado' }, open: true });
            setDays({ ...days, countData: { ...days.countData, defeated: [], total: 0 } });
        } else setSnack({ message: { status: 'error', mess: response.error }, open: true });
        setTimeout(() => { setSnack({ message: { status: '', mess: '' }, open: false }) }, 2000);
        setLoading(false);
    };

    return (
        <div className='cleanAlerts'>

            <section className='cleanAlertsSect'>

                <div>
                    <label>Días</label>
                    <input
                        type="number" placeholder='Dias de vencido'
                        value={days.maxCount} onChange={(e) => setDays({ ...days, maxCount: e.target.value })}
                        onBlur={handleUpdateDays}
                    />
                </div>

                {days && days.countData &&
                    <div>
                        <label>Alertas Total</label>
                        <p>{days.countData?.total || 0}</p>
                    </div>
                }

                {days && days.countData &&
                    <div>
                        <label>Aler. vencidas</label>
                        <p style={{ backgroundColor: '#fd7b7b' }}>{days.countData?.defeated.length || 0}</p>
                    </div>
                }

                {days && days.countData && days.countData.defeated.length > 0 &&
                    <div>
                        <label>Eliminar todo</label>
                        <button
                            className='btn btnC cleanAlertsBtn'
                            onClick={handleDeleteAll}
                        >
                            Eliminar
                        </button>
                    </div>
                }

            </section>

            {type === 'maxAlert' && days.countData && days.countData?.defeated &&
                <AlertsForm alerts={days.countData.defeated} deleteById={handleDeleteAlertById} />
            }

            {type === 'maxPostp' && days.countData && days.countData?.defeated &&
                <ShiftPostponePanelTab postpones={days.countData.defeated} deleteById={handleDeleteAlertById} />
            }

            {type === 'maxShift' && days.countData && days.countData?.defeated &&
                <ShiftTableConfig shifts={days.countData.defeated} deleteById={handleDeleteAlertById} />
            }

            <SnackbarAlert message={snack.message} open={snack.open} />
        </div>
    );
};

export default CleanAlerts;