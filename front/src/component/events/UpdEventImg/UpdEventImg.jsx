import './updEventImg.scss';
import { useState } from 'react';
import UpdUploadEventImg from './UpdUploadEventImg/UpdUploadEventImg';
import UpdPresetEventImg from './UpdPresetEventImg/UpdPresetEventImg';
import EventCard from '../EventCard/EventCard';

const UpdEventImg = ({ event, closedImg, setEvents, events }) => {

    const [vew, setVew] = useState(null);
    const handlevew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='updEventImg'>
            <h2>Actualizar Imágen</h2>
            <div className='updEventImgBtns'>
                <button className='btn btnC' onClick={() => handlevew('img')}>Subir Img</button>
                <button className='btn btnC' onClick={() => handlevew('pre')}>Pre-set</button>
            </div>
            {vew === 'img' && <UpdUploadEventImg event={event} closedImg={closedImg} setEvents={setEvents} events={events} />}
            {vew === 'pre' && <UpdPresetEventImg event={event} closedImg={closedImg} setEvents={setEvents} events={events} /> }
            {vew === null && <EventCard card={event} /> }
        </div>
    );
};

export default UpdEventImg;