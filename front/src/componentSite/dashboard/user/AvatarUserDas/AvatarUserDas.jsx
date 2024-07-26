import './avatarUserDas.scss';
import { useEffect, useState } from 'react';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import Title from '../../../../component/dashboard/Title/Title';
import UserSearch from '../../../../component/utils/UserSearch/UserSearch';
import { getUserByIdApi } from '../../../../helpers/users/getUserByIdApi.api';
import Load from '../../../../component/utils/Load';
import SelectedAvatar from '../../../../component/avatars/SelectedAvatar/SelectedAvatar';

const AvatarUserDas = () => {

    const [user, setUser] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getUserByIdApi(user._id);
            if (response.status === 'success') setDataUser(response.result);
            else console.log(response);
            setLoading(false);
        };
        if (user && user._id) fetchData();
    }, [user]);

    return (
        <div className='avatarUserDas'>
            <Title Icon={FlutterDashIcon} name='Modificar avatar del usuario' />
            <UserSearch setUser={setUser} />
            <div className='avatarUserDasDiv'></div>
            {dataUser && <SelectedAvatar user={dataUser} />}
            <Load loading={loading} />
        </div>
    );
};

export default AvatarUserDas;