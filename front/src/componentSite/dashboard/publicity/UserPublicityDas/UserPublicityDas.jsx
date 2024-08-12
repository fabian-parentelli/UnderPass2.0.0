import './userPublicityDas.scss';
import { useState } from 'react';
import HailIcon from '@mui/icons-material/Hail';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import UserAppMenu from '../../../../component/advertisting/UserAppMenu/UserAppMenu';

const UserPublicityDas = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='userPublicityDas'>
            <Title Icon={HailIcon} name='Publicidad como usuario' />
            <UserSearch setUser={setUser} />
           {user &&  <UserAppMenu userId={user._id} country={user.country} />}
        </div>
    );
};

export default UserPublicityDas;