import './alertsPanel.scss';
import { useEffect, useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import MessageIcon from '@mui/icons-material/Message';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';
import { Link } from 'react-router-dom';

const AlertsPanel = () => {

    const [values, setValues] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAlertsApi();
            if (response.status === 'success') setValues(response.result);
            else console.log(response);
        }; fetchData();
    }, []);

    return (
        <div className='alertsPanel'>
            {values &&
                <>
                    <Link to={'/dashboard/vewapplicattion'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: values.applications ? '#00756F' : '#CACACA' }}
                    >
                        <BadgeIcon className='icon' />
                        <p>Solicitudes</p>
                    </Link>

                    <Link to={'/'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: values.events ? '#00756F' : '#CACACA' }}
                    >
                        <ConfirmationNumberIcon className='icon' />
                        <p>Eventos</p>
                    </Link>
                    
                    <Link to={'/'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: values.messges ? '#00756F' : '#CACACA' }}
                    >
                        <MessageIcon className='icon' />
                        <p>Mensjaes</p>
                    </Link>
                </>
            }
        </div>
    );
};

export default AlertsPanel;