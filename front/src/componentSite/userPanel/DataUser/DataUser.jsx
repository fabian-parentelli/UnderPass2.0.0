import './dataUser.scss';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext';
import UserDatas from '../../../component/user/datas/UserDatas/UserDatas';

const DataUser = () => {

    const { user } = useLoginContext();

    return (
        <div className='dataUser'>
            <Title Icon={AccountBoxIcon} name='Tus Datos' goTo='yourdata' />
            {user && user.data && user.data._id && < UserDatas id={user.data._id} />}
        </div>
    );
};

export default DataUser;