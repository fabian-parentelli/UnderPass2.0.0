import './userAlerts.scss';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Title from '../../../../component/dashboard/Title/Title';
import { useState } from 'react';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import AlertsUserVew from '../../../../component/alerts/AlertsUserVew/AlertsUserVew';

const UserAlerts = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='userAlerts'>
            <Title Icon={AccessAlarmIcon} name='Alertas por Usuario' />
            <UserSearch setUser={setUser} />
            {user && <AlertsUserVew userId={user._id} />}
        </div>
    );
};

export default UserAlerts;