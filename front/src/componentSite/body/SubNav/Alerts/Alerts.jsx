import './alerts.scss';
import { useEffect, useState } from 'react';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api';
import BadgeComp from '../../../../component/utils/BadgeComp/BadgeComp';

import BadgeIcon from '@mui/icons-material/Badge';
import { Link } from 'react-router-dom';

const Alerts = () => {

    const [alerts, setAlerts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAlertsApi();
            if (response.status === 'success') setAlerts(response.result);
        }; fetchData();
    }, []);

    return (
        <div className='alerts'>
            {alerts && alerts.applications &&
                <Link className='alertsLink' to={'/dashboard/vewapplicattion'}>
                    <BadgeComp
                        Icon={BadgeIcon}
                        data={alerts.applications}
                        color='warning'
                    />
                </Link>
            }
        </div>
    );
};

export default Alerts;
// primary - secundary - error - warning - info - success