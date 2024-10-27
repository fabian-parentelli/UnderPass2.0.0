import './eventPage.scss';
import { useState } from 'react';
import EventFree from './EventFree/EventFree';
import EmailIcon from '@mui/icons-material/Email';
import EventOthers from './EventOthers/EventOthers';
import MapView from '../../../component/utils/MapVew';
import EventIsPerson from './EventIsPerson/EventIsPerson';
import EventPageTick from './EventPageTick/EventPageTick';
import VideosVew from '../../../component/utils/VideosVew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Messages from '../../../component/messages/Messages/Messages';
import EventTypeImg from '../../../component/events/EventTypeImg/EventTypeImg';
import UnderEventsLog from '../../../component/fonts/UnderEventsLog/UnderEventsLog';

const EventPageHtml = ({ event }) => {

    const [viewport, setViewport] = useState(window.innerWidth);
    const [vew, setVew] = useState(false);
    const handleVew = (e) => setVew(e.target.value);

    return (
        <div className='eventPage'>

            <section className='eventPageTop'>

                <div
                    style={{
                        width:
                            viewport > 767
                                ? (event.tickets ? (event.inPerson ? '70%' : '100%') : (event.inPerson ? '70%' : '100%'))
                                : '100%'
                    }}
                    className='eventPageL'
                >

                    <div className='eventPageTitle'>
                        <h2>{event.title}</h2>
                        <div className='eventPageSubTitle'>
                            <CalendarMonthIcon />
                            <p>{new Date(event.startDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</p>
                            <p> - {event.startHour}hs</p>
                        </div>
                    </div>

                    {event.inPerson ?
                        (event.typePublic && event.tickets
                            ? <EventPageTick event={event} />
                            : (!event.typePublic ? '' : <EventFree />))
                        : <EventIsPerson event={event} />
                    }

                    {!event.typePublic &&
                        <>
                            <div className='eventPageIsNotPublic'>
                                <label>Escribe la contraseña</label>
                                <input type="text" onChange={handleVew} />
                            </div>
                            {event.tickets
                                ? event.password == vew && <EventPageTick event={event} />
                                : vew === event.password && <EventIsPerson event={event} pass={true} />
                            }
                        </>
                    }
                </div>

                {event.inPerson &&
                    <div className='eventPageR'>

                        <div className='eventPageLocation'>
                            <LocationOnIcon className='eventPageLocationIcon' />
                            <div>
                                <p>{event.location.place}</p>
                                <p>{event.location.address} {event.location.door} - {event.location.province}</p>
                            </div>
                        </div>

                        <div className='eventPageMap'>
                            <MapView coordinates={event.location.coordinates} />
                        </div>

                    </div>
                }
            </section>

            <section className='eventPageSecond'>

                <p className='eventPageDescription'>{event.description}</p>

                {event.guests[0] !== '' &&
                    <div className='eventPageGuests'>
                        <p style={{ color: 'gray' }}>{typeGuestsText(event.typeGuest) || 'Invitados'}:</p>
                        {event && event.guests && event.guests.map((g, i) => (
                            <p key={i}>{g} </p>
                        ))}
                    </div>
                }

                <div className='eventPageImgs'>

                    <div className='eventPageImg'>
                        <EventTypeImg card={event} />
                    </div>

                    {event.video &&
                        <div className='eventPageVid'>
                            <VideosVew url={event.video} />
                        </div>
                    }
                </div>

                <div className='sectionMinors'>
                    <div className='eventPageInfo'>
                        <EmailIcon className='eventPageInfoIcon' />
                        <p>Recibir información adicional</p>
                    </div>
                    {!event.minors ?
                        <p className='eventPageMinorsPP'>Apto Todo Público.</p>
                        : <div className='eventPageMinors'>
                            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1728683588/images/gqdohvswtpihjshbvcwk.png" alt="img" />
                            <p>Apto solo mayores de 18 años.</p>
                        </div>
                    }
                </div>
            </section>

            <section className='evnetPageLogo'>
                <UnderEventsLog size={3} />
            </section>

            <section className='eventpageMessage'>
                <Messages type={'event'} typeId={event._id} />
            </section>

            <EventOthers />
        </div>
    );
};

export default EventPageHtml;

function typeGuestsText(types) {
    const data = {
        'guests': () => { return 'Invitados' },
        'cast': () => { return 'Elenco' },
    };
    return (data[types] || (() => types))();
};