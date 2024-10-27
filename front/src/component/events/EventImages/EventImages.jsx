import './eventImages.scss';
import { useState } from 'react';
import EventCard from '../EventCard/EventCard';
import EventHelpIn from './EventHelpIn/EventHelpIn';
import EventPreset from './EventPreSet/EventPreset';
import UploadEventImg from './UploadEventImg/UploadEventImg';
import EventVideoInput from './EventVideoInput/EventVideoInput';
import UnderEventsLog from '../../fonts/UnderEventsLog/UnderEventsLog';

const EventImages = ({ values, setValues, setLoading, setProgres }) => {

    const [vew, setVew] = useState(null);
    const handlevew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='eventImages'>
            <EventVideoInput values={values} setValues={setValues} />

            <div className='eventImagesBtns'>
                <button className='btn btnC' onClick={() => handlevew('img')}>Subir Img</button>
                <button className='btn btnC' onClick={() => handlevew('pre')}>Pre-set</button>
            </div>

            {vew === 'img' && <UploadEventImg values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />}
            {vew === 'pre' && <EventPreset values={values} setValues={setValues} setLoading={setLoading} setProgres={setProgres} />}

            {vew === null && (
                !values.photo.img && !values.photo.presetId
                    ? <EventHelpIn />
                    : <div className='eventImagesImgDiv'><EventCard card={values} /></div>
            )}

            <div className='eventImagesBtnsBotton'>
                <button className='btn btnD' onClick={() => setProgres(20)}>{'< Info'}</button>
                <button className='btn btnD' onClick={() => setProgres(60)}>
                    {values.inPerson ? 'Locación >' : 'Stream >'}
                </button>
            </div>

            <div className='eventImagesLogo'>
                <UnderEventsLog size={3} />
            </div>
        </div>
    );
};

export default EventImages;