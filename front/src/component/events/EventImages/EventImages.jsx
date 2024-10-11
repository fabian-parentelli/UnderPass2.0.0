import './eventImages.scss';
import { useState } from 'react';
import EventHelpIn from './EventHelpIn/EventHelpIn';
import UploadEventImg from './UploadEventImg/UploadEventImg';
import EventVideoInput from './EventVideoInput/EventVideoInput';
import EventCard from '../EventCard/EventCard';

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
            {vew === 'pre' && <p>pre</p>}

            {vew === null && (
                !values.photo?.img
                    ? <EventHelpIn />
                    : <div className='eventImagesImgDiv'><EventCard card={values} /></div>
            )}
        </div>
    );
};

export default EventImages;