import './eventmenu.scss';
import Title from '../../../component/dashboard/Title/Title';
import { useLoginContext } from '../../../context/LoginContext';
import EventPanel from '../../../component/events/EventPanel/EventPanel';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const Eventmenu = () => {

    const { user } = useLoginContext();

    return (
        <div className='eventmenu'>
            <Title Icon={ConfirmationNumberIcon} name='Eventos' />
            {user.data && <EventPanel user={user.data} />}
        </div>
    );
};

export default Eventmenu;