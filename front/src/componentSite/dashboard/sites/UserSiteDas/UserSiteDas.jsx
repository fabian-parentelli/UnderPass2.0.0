import './userSiteDas.scss';
import { useState } from 'react';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import SitePanal from '../../../../component/sites/sitePanel/SitePanel/SitePanal';

const UserSiteDas = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='userSiteDas'>
            <Title Icon={DeviceHubIcon} name='Sitio usuario' />
            <UserSearch setUser={setUser} />
            <div style={{height: '1rem'}}></div>
            {user && <SitePanal userId={user._id} />}
        </div>
    );
};

export default UserSiteDas;