import './getEventUser.scss';
import { useState } from 'react';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import EventPanel from '../../../../component/events/EventPanel/EventPanel';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const GetEventUser = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='getEventUser'>
            <Title Icon={PermContactCalendarIcon} name='Eventos por usuario' />
            <UserSearch setUser={setUser} />
            <div style={{height: '1rem'}}></div>
            {user && <EventPanel user={user} />}
        </div>
    );
};

export default GetEventUser;