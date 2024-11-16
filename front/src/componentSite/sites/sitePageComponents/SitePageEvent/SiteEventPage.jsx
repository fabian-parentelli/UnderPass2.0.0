import './siteEventPage.scss';
import { Link } from 'react-router-dom';
import EventTypeImg from '../../../../component/events/EventTypeImg/EventTypeImg';

const SiteEventPage = ({ site }) => {
    
    return (
        <div className='siteEventPage'>
            <h2 className='colUE'>Próximos shows:</h2>

            {site.events.length > 0 && site.events.map((sit) => (
                <Link to={`/eventpage/${sit._id}`} key={sit._id} className='siteEventPageDiv'>
                    <div className='siteEventPageImg'><EventTypeImg card={sit} /></div>
                    <div className='lineVert'></div>

                    <div style={{ width: '40%' }}>
                        <p className='pgray'>{sit.location.city} - {sit.location.province}</p>
                        <h2 className='colUE'>{sit.title}</h2>
                    </div>
                    <div className='lineVert'></div>

                    <div className='siteEventPageDate'>
                        <p>{new Date(sit.startDate).toLocaleDateString('en-GB', { day: '2-digit', timeZone: 'UTC' })}</p>
                        <div>
                            <p>{new Date(sit.startDate).toLocaleDateString('es-ES', { month: 'short', timeZone: 'UTC' })}</p>
                            <p>{new Date(sit.startDate).toLocaleDateString('es-ES', { year: 'numeric', timeZone: 'UTC' })}</p>
                        </div>
                    </div>
                    <div className='lineVert'></div>

                    <div className='siteEventPageDate'>
                        <p>{sit.startHour.split(':')[0]}</p>
                        <div>
                            <p>{sit.startHour.split(':')[1]}</p>
                            <p>hrs</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SiteEventPage;