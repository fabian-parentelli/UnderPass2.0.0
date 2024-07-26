import './userDashboard.scss';
import { useState } from 'react';
import Title from '../../../../component/dashboard/Title/Title';
import EngineeringIcon from '@mui/icons-material/Engineering';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import UserDatas from '../../../../component/user/datas/UserDatas/UserDatas';

const UserDashboard = () => {

    const [user, setUser] = useState(null);

    return (
        <div className='userDashboard'>
            <Title Icon={EngineeringIcon} name='Buscar y modificar Usuario' />
            <UserSearch setUser={setUser} />
            {user && <UserDatas id={user._id} />}
        </div>
    );
};

export default UserDashboard;