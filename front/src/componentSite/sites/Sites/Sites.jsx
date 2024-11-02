import './sites.scss';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';
import IsLoggedUrser from '../../../component/user/IsLoggedUser/IsLoggedUser';
import SitesManagger from '../../../component/sites/SitesManager/SitesManager';

const Sites = () => {

    const { user } = useLoginContext();

    return (
        <div className='sites'>
            <Link to={'/help#newEventHelp'} className='newEventHelp'><p>Ayuda</p></Link>
            <h2>Gestor de Sitios</h2>
            {user && !user.logged && <IsLoggedUrser setPath='sites' />}
            {user && user.logged && <SitesManagger userId={user.data._id} />}
        </div>
    );
};

export default Sites;