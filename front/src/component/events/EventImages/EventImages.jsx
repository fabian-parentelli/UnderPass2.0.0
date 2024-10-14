import './eventImages.scss';
import { useState } from 'react';
import EventHelpIn from './EventHelpIn/EventHelpIn';
import UploadEventImg from './UploadEventImg/UploadEventImg';
import EventVideoInput from './EventVideoInput/EventVideoInput';
import EventCard from '../EventCard/EventCard';
import EventPreset from './EventPreSet/EventPreset';
import UnderEventsLog from '../../fonts/UnderEventsLog/UnderEventsLog';

const EventImages = ({ values, setValues, setLoading, setProgres }) => {

    const [vew, setVew] = useState(null);
    const [video, setVideo] = useState(values.video || null);

    const handlevew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='eventImages'>
            <EventVideoInput video={video} setVideo={setVideo} />

            <div className='eventImagesBtns'>
                <button className='btn btnC' onClick={() => handlevew('img')}>Subir Img</button>
                <button className='btn btnC' onClick={() => handlevew('pre')}>Pre-set</button>
            </div>

            {vew === 'img' && <UploadEventImg values={values} video={video} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />}
            {vew === 'pre' && <EventPreset values={values} video={video} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />}

            {vew === null && (
                !values.photo
                    ? <EventHelpIn />
                    : <div className='eventImagesImgDiv'><EventCard card={values} /></div>
            )}

            <div className='eventImagesBtnsBotton'>
                <button className='btn btnD' onClick={()=> setProgres(20)}>Volver</button>
                <button className='btn btnD' onClick={()=> setProgres(60)}>Continuar</button>
            </div>

            <div className='eventImagesLogo'>
                <UnderEventsLog size={3} />
            </div>
        </div>
    );
};

export default EventImages;