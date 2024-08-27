import './userOrders.scss';
import { useState } from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import Commerce from '../../../../component/commerce/Commerce/Commerce';

const UserOrders = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='userOrders'>
            <Title Icon={ListAltIcon} name='Ordenes del usuario' />
            <UserSearch setUser={setUser} />
            <div style={{ marginTop: '1rem' }}></div>
            {user && <Commerce user={user} /> }
        </div>
    );
};

export default UserOrders;