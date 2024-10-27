import './eventPreset.scss';
import { useEffect, useState } from 'react';
import { getPresetApi } from '../../../../helpers/images/preset/getPresets.api.js';
import EventCard from '../../EventCard/EventCard.jsx';
import { newPresetEventApi } from '../../../../helpers/event/newPresetEvent.api.js';

const EventPreset = ({ values, setValues, setLoading, setProgres }) => {

    const [presets, setPresets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPresetApi();
            if (response.status === 'success') {
                const result = response.result.map((resp) => {
                    return { ...values, photo: { isPreset: true, presetId: resp } };
                });
                setPresets(result);
            } else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleClick = async (card) => {
        setLoading(true);
        const obj = { presetId: card.presetId._id, eventId: values._id }
        const response = await newPresetEventApi(obj);
        if (response.status === 'success') {
            setValues(response.result);
            setProgres(60);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='eventPreset'>
            {presets && presets.map((pre, index) => (
                <div key={index} className='eventPresetBTN'>
                    <EventCard card={pre} />
                    <button className='btn eventPresetBtn' onClick={() => handleClick(pre.photo)}>Elegir</button>
                </div>
            ))}
        </div>
    );
};

export default EventPreset;