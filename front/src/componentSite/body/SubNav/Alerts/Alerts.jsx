import './alerts.scss';
import { Fragment, useEffect, useState } from 'react';
import { getAllAlertsApi } from '../../../../helpers/alerts/getAllAlerts.api.js';
import BadgeComp from '../../../../component/utils/BadgeComp/BadgeComp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';
import { Link } from 'react-router-dom';

const Alerts = ({ user }) => {

    const [alerts, setAlerts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllAlertsApi();
            if (response.status === 'success') setAlerts(response.result.alerts);
        }; fetchData();
    }, []);

    return (
        <div className='alerts'>
            {alerts && alerts.map((alert, index) => (
                <Fragment key={index}>
                    {alert.type === 'publicity' &&
                        <Link className='alertsLink' to={user.role !== 'user' ? '/dashboard/vewapplicattion' : '/profile/advertising'}>
                            <BadgeComp
                                Icon={CalendarMonthIcon}
                                data={alerts.filter(item => item.type === 'publicity').length}
                                color='error'
                            />
                        </Link>
                    }

                    {alert.type === 'publicity' &&
                        <Link className='alertsLink' to={user.role !== 'user' ? '/dashboard/vewapplicattion' : '/profile/advertising'}>
                            <BadgeComp
                                Icon={BadgeIcon}
                                data={alerts.filter(item => item.type === 'publicity').length}
                                color='success'
                            />
                        </Link>
                    }
                </Fragment>
            ))}
        </div >
    );
};

export default Alerts;
// primary - secundary - error - warning - info - success