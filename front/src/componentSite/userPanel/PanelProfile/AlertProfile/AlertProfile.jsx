import './alertProfile.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api';

import BadgeIcon from '@mui/icons-material/Badge';
import MessageIcon from '@mui/icons-material/Message';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const AlertProfile = ({ user }) => {

    const [alerts, setAlerts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAlertsApi();
            if (response.status === 'success') setAlerts(response.result);
            else console.log(response);
        }; if (user) fetchData();
    }, []);

    return (
        <div className='alertProfile'>
            {alerts &&
                <>
                    <Link to={'/profile/advertising'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: alerts.applications ? '#00756F' : '#CACACA' }}
                    >
                        <BadgeIcon className='icon' />
                        <p>Solicitudes</p>
                    </Link>

                    <Link to={'/'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: alerts.events ? '#00756F' : '#CACACA' }}
                    >
                        <ConfirmationNumberIcon className='icon' />
                        <p>Eventos</p>
                    </Link>

                    <Link to={'/'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: alerts.messges ? '#00756F' : '#CACACA' }}
                    >
                        <MessageIcon className='icon' />
                        <p>Mensjaes</p>
                    </Link>

                </>
            }
        </div>
    );
};

export default AlertProfile;