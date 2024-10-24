import './newEvent.scss';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';
import CreateEvent from '../../../component/events/CreateEvent/CreateEvent';
import IsLoggedUrser from '../../../component/user/IsLoggedUser/IsLoggedUser';
import IsFinancialData from '../../../component/user/IsFinancialData/IsFinancialData';

const NewEvent = () => {

    const { user } = useLoginContext();

    return (
        <div className='newEvent'>
            <Link to={'/help#newEventHelp'} className='newEventHelp'><p>Ayuda</p></Link>
            <h2>Crear evento</h2>
            {user && !user.logged && <IsLoggedUrser setPath='newevent' />}
            {user && user.data && !user.data.financeData && <IsFinancialData setPath='newevent' />}
            {user && user.logged && user.data.financeData &&
                <CreateEvent user={user.data} />
            }
        </div>
    );
};

export default NewEvent;