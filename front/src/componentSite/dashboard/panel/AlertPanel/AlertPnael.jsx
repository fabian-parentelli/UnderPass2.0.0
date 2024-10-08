import './alertsPanel.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import ReportIcon from '@mui/icons-material/Report';
import MessageIcon from '@mui/icons-material/Message';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DeleteCountry from './DeleteCountry/DeleteCountry.jsx';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';

const AlertsPanel = () => {

    const [values, setValues] = useState(null);
    const [hasNewReport, setHasNewReport] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAlertsApi();
            if (response.status === 'success') {
                setValues(response.result);
                setHasNewReport(response.result.alerts.some(alert => alert.type === 'newReport_news'));
            } else console.log(response);
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

                    <Link to={'/dashboard/helpdas'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: '#CACACA' }}
                    >
                        <HelpOutlineIcon className='icon' />
                        <p>Ayudas</p>
                    </Link>

                    <Link to={'/dashboard/comments'}
                        className='alertsPanelDiv'
                        style={{ backgroundColor: hasNewReport ? '#fd6135' : '#CACACA' }}
                    >
                        <ReportIcon className='icon' />
                        <p>Denucnias</p>
                    </Link>

                    <DeleteCountry />
                </>
            }
        </div>
    );
};

export default AlertsPanel;