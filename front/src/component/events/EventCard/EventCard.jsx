import './eventCard.scss';
import { Link } from 'react-router-dom';
import Favorite from '../../utils/Favorite/Favorite';
import EventTypeImg from '../EventTypeImg/EventTypeImg';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EventCard = ({ card }) => {
    const date = new Date(card.startDate);
    const day = date.toLocaleDateString('en-GB', { day: '2-digit', timeZone: 'UTC' });
    const month = date.toLocaleDateString('es-ES', { month: 'short', timeZone: 'UTC' });
    const year = date.toLocaleDateString('es-ES', { year: 'numeric', timeZone: 'UTC' });

    return (
        <div className='eventCard'>

            <div className='eventCardFavorite'>
                <Favorite id={card._id} />
            </div>

            <Link to={`/eventpage/${card._id}`}>
                <EventTypeImg card={card} />
            </Link>

            <div className='eventCardContainer'>

                <div className='eventCardText'>
                    {card.inPerson
                        ? <div className='eventCardLocation'>
                            <LocationOnIcon className='eventCardIcon' />
                            <p>{card?.location?.city || 'ciuadad'} - {card?.location?.province || 'provincia'}</p>
                        </div>
                        : <div className='eventCardLocation'>
                            <VideocamIcon className='eventCardIcon' />
                            <p>Stream</p>
                        </div>
                    }
                    <h3>{card.title}</h3>
                </div>

                <div className='eventCardTime'>

                    <div className='eventCardDate'>
                        <p>{day}</p>
                        <div>
                            <p>{month}</p>
                            <p>{year}</p>
                        </div>
                    </div>

                    <div className='lineVert'></div>

                    <div className='eventCardDate'>
                        {card.startHour && <p>{card.startHour.split(':')[0]}</p>}
                        <div>
                            {card.startHour && <p>{card.startHour.split(':')[1]}</p>}
                            <p>hrs</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EventCard;