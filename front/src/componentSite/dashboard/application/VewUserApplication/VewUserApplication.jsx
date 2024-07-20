import { useState } from 'react';
import './vewUserApplication.scss';
import Title from '../../../../component/dashboard/Title/Title';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import VewAllAdvertisting from '../../../../component/advertisting/VewAllAdvertisting/VewAllAdvertisting';

const VewUserApplication = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='vewUserApplication'>
            <Title Icon={AccessibilityIcon} name='Solicitud por Usuario' />
            <UserSearch setUser={setUser} />
            {user && <VewAllAdvertisting id={user._id} />}
        </div>
    );
};

export default VewUserApplication;