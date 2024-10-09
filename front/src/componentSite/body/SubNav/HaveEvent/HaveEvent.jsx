import './haveEvent.scss';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

const HaveEvent = () => {

    const eventHave = localStorage.getItem('event');

    return (
        <>
            {eventHave &&
                <Link to={'/newevent'} className='haveEvent'>
                    <Tooltip title='Tienes un evento pendiente'>
                        <TheaterComedyIcon className='haveEventIcon' />
                    </Tooltip>
                </Link>
            }
        </>
    );
};

export default HaveEvent;