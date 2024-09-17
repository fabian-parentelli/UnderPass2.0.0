import './userVewSmall.scss';
import Copy from '../../utils/Copy.jsx';
import { useEffect, useState } from 'react';
import LoadSmallB from '../../utils/LoadSmallB/LoadSmallB';
import { getUserByIdApi } from '../../../helpers/users/getUserByIdApi.api.js';

const UserVewSmall = ({ userId }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserByIdApi(userId);
            if (response.status === 'success') setUser(response.result);
            else console.error(response.error);
        }; fetchData();
    }, [userId]);

    return (
        <div className='userVewSmall'>
            {!user
                ? <LoadSmallB />
                : <div className='userVewSmallUser'>
                    <img src={user.avatar[0]} alt="img" />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p style={{fontSize: '12px'}}>{user._id} <Copy values={user._id} /></p>
                    <p>{user.location.province && user.location.province} - {user.location.country === 'UY' ? 'Uruguay' : 'Argentina'}</p>
                </div>
            }
        </div>
    );
};

export default UserVewSmall;