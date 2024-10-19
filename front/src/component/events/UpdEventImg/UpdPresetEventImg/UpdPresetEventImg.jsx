import './updPresetEventImg.scss';
import { Spinner } from 'faradaycomp';
import { useEffect, useState } from 'react';
import EventCard from '../../EventCard/EventCard.jsx';
import { getPresetApi } from '../../../../helpers/images/preset/getPresets.api.js';
import { newPresetEventApi } from '../../../../helpers/event/newPresetEvent.api.js';

const UpdPresetEventImg = ({ event, closedImg, setEvents, events }) => {

    const [presets, setPresets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await getPresetApi();
            if (response.status === 'success') {
                const result = response.result.map((resp) => {
                    return { ...events, photo: { isPreset: true, presetId: resp } };
                });
                setPresets(result);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleClick = async (card) => {
        setLoading(true);
        const obj = { presetId: card.presetId._id, eventId: event._id };
        const response = await newPresetEventApi(obj);
        if (response.status === 'success') {
            const data = { ...events };
            const index = data.docs.findIndex(i => i._id === response.result._id)
            data.docs[index] = response.result;
            setEvents(data);
            closedImg();
        };
        setLoading(false);
    };

    return (
        <div className='updPresetEventImg'>
            {loading ? <div><Spinner color={'#383f84'} /> </div> : presets && presets.map((pre, index) => (
                <div key={index} className='eventPresetBTN'>
                    <EventCard card={pre} />
                    <button
                        className='btn btnUE'
                        onClick={() => handleClick(pre.photo)}
                        style={{ marginTop: '12px' }}
                    >
                        Elegir
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UpdPresetEventImg;