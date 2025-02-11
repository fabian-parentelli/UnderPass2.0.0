import './subNav.scss';
import Alerts from './Alerts/Alerts';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useLoginContext } from '../../../context/LoginContext';
import HaveEvent from './HaveEvent/HaveEvent';

const SubNav = () => {

    const { user } = useLoginContext();

    return (
        <div className='subNav'>
            
            {user.logged &&
                <div className='subNavTitle'>
                    <img src={user.data.avatar[0]} alt="img" />
                    <p>Hola {user.data.name} !!!</p>
                </div>
            }

            <div className='subNavIcons'>
                <HaveEvent />
                <Alerts />
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