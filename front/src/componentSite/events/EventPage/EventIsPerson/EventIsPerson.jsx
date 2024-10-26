import './eventIsPerson.scss';
import { Link } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventPageTick from '../EventPageTick/EventPageTick';

const EventIsPerson = ({ event, pass }) => {

    return (
        <div className='eventIsPerson'>
            {event.typePublic && event.tickets &&
                <div className='eventIsPersonA'>
                    <p>
                        {event.tickets
                            ? 'Compra las entradas y disfruta de este Stream'
                            : 'Las entradas son gratis pero debes registrarte.'
                        }
                    </p>
                    <EventPageTick event={event} />
                </div>
            }

            {event.typePublic && !event.tickets &&
                <section className='eventIsPersonB'>
                    <p className='eventIsPersonTitle'>Stream completamente gratis para disfrutar.</p>
                    {event.links && event.links.map((link) => (
                        <div key={link._id} className='eventIsPersonLinksCont'>
                            <div className='eventIsPersonDiv'>
                                <VideocamIcon />
                                <p>{link.channel}</p>
                            </div>
                            {link.chanel === 'other'
                                ? <a href={link.link} target='_blank'>{link.link}</a>
                                : <Link to={`/stream/${event._id}/${link.channel}`} className='eventIsPersonLink'>{link.link}</Link>
                            }
                        </div>
                    ))}
                </section>
            }
            
            {pass && !event.tickets &&
                <section className='eventIsPersonB'>
                    <p className='eventIsPersonTitle'>Stream completamente gratis para disfrutar.</p>
                    {event.links && event.links.map((link) => (
                        <div key={link._id} className='eventIsPersonLinksCont'>
                            <div className='eventIsPersonDiv'>
                                <VideocamIcon />
                                <p>{link.channel}</p>
                            </div>
                            {link.chanel === 'other'
                                ? <a href={link.link} target='_blank'>{link.link}</a>
                                : <Link to={`/stream/${event._id}/${link.channel}`} className='eventIsPersonLink'>{link.link}</Link>
                            }
                        </div>
                    ))}
                </section>
            }
        </div>
    );
};

export default EventIsPerson;