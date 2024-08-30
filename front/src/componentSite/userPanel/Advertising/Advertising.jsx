import './advertising.scss';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import UserAppMenu from '../../../component/advertisting/UserAppMenu/UserAppMenu.jsx';
import { useEffect } from 'react';
import { updVewUserApi } from '../../../helpers/publicity/updVewUser.api.js';

const Advertising = () => {

    const { user } = useLoginContext();
    const country = localStorage.getItem('country');

    useEffect(() => {
        const fetchData = async () => await updVewUserApi();
        if (user.data.role === 'user') fetchData();
    }, [user]);

    return (
        <div className='advertising'>
            <Title Icon={LiveTvIcon} name='Publicidad' goTo='/help#publicityHelp' />
            {user && user.data && <UserAppMenu userId={user.data._id} country={country} />}
        </div >
    );
};

export default Advertising;