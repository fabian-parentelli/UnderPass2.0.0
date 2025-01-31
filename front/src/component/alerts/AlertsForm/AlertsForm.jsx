import './alertsForm.scss';
import Tooltip from '@mui/material/Tooltip';
import BigImg from '../../utils/BigImg/BigImg';
import DeleteIcon from '@mui/icons-material/Delete';
import getTypeAlerts from '../../../utils/alertTypeText.utils';
import { useLoginContext } from '../../../context/LoginContext';
import { genericImages } from '../../../utils/urlImages.utils.js';

const AlertsForm = ({ alerts, deleteById }) => {

    const { user } = useLoginContext();
    const daysPassed = (date) => Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));

    return (
        <div className='alertsForm'>
            <table>
                <thead>
                    <tr>
                        <th>imgágen</th>
                        <th>Mensaje</th>
                        <th>Nombre</th>
                        <th>Alerta</th>
                        {user.data.role !== 'user' && <th>Eliminar</th>}
                    </tr>
                </thead>
                <tbody>
                    {alerts && alerts.map((alert) => (
                        <tr key={alert._id}>
                            <td>
                                <BigImg img={genericImages.underAlerts} border={false} />
                            </td>

                            <td>{getTypeAlerts(alert.type)}</td>

                            {/* Trabajar: Tengo mis dudas si esto funicona correctamente */}
                            <td>
                                {alert.data?.name ? alert.data.name : ''}
                                {alert.data?.title && ` ${alert.data.title}`}
                                {!alert.data?.title && !alert.data?.name && 'Información'}
                            </td>

                            <td>
                                <p>{new Date(alert.date).toLocaleDateString()}</p>
                                <p>{daysPassed(alert.date)} días</p>
                            </td>

                            {user.data.role !== 'user' &&
                                <td onClick={() => deleteById(alert._id)} className='alertsFormBack'>
                                    <Tooltip title='Eliminar' placement="right">
                                        <DeleteIcon />
                                    </Tooltip>
                                </td>
                            }

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlertsForm;