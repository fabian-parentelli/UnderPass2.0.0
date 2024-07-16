import './subNav.scss';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useLoginContext } from '../../../context/LoginContext';


const SubNav = () => {

    const { user } = useLoginContext();

    return (
        <div className='subNav'>
            <div className='subNavTitle'>
                <img src={user.data.avatar[0]} alt="img" />
                <p>Hola {user.data.name} !!!</p>
            </div>

            <div className='subNavIcons'>

                {user && user.data && (user.data.role === 'admin' || user.data.role === 'master') &&
                    <Link to={'/dashboard'} className='btnDoorCont'>
                        <BarChartIcon />
                    </Link>
                }
            </div>
        </div>
    );
};

export default SubNav;