import './shiftUserDas.scss';
import { useState } from 'react';
import Title from '../../../component/dashboard/Title/Title';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UserSearch from '../../../component/utils/UserSearch/UserSearch';
import ShiftPanels from '../../../component/shift/ShiftPanels/ShiftPanels';

const ShiftUserDas = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='shiftUserDas'>
            <Title Icon={CalendarMonthIcon} name='Turnos por usuario' />
            <UserSearch setUser={setUser} />
            <div className='shiftUserDasGap'></div>
            {user && user._id && <ShiftPanels userId={user._id} />}
        </div>
    );
};

export default ShiftUserDas;