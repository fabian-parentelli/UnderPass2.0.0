import './advertising.scss';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import UserAppMenu from '../../../component/advertisting/UserAppMenu/UserAppMenu.jsx';

const Advertising = () => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');

    return (
        <div className='advertising'>
            <Title Icon={LiveTvIcon} name='Publicidad' goTo='/help#advertising' />
            {user && user.data && <UserAppMenu userId={user.data._id} country={country} />}
        </div >
    );
};

export default Advertising;