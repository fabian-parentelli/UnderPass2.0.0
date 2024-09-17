import './deleteAlert.scss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteAlertsApi } from '../../../helpers/alerts/deleteAlerts.api.js';

const DeleteAlert = ({ alertId, setLoading, alerts, setAlerts }) => {

    const handleDelete = async (id) => {
        setLoading(true);
        const response = await deleteAlertsApi(id);
        if(response.status === 'success') {
            const oldAlerts = { ...alerts };
            const newAlerts = oldAlerts.docs.filter(al => al._id !== id);
            oldAlerts.docs = newAlerts;
            setAlerts(oldAlerts);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <th className='aeleteAlert' onClick={() => handleDelete(alertId)}>
            <DeleteForeverIcon className='aeleteAlertId' />
        </th>
    );
};

export default DeleteAlert;