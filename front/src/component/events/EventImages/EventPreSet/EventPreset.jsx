import './eventPreset.scss';
import { useEffect, useState } from 'react';
import { getPresetApi } from '../../../../helpers/images/preset/getPresets.api.js';
import EventCard from '../../EventCard/EventCard.jsx';

const EventPreset = ({ values, video, setValues, setLoading, setProgres }) => {

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

        console.log(card.presetId._id);

        // Conectar con la base de datos !!!!!
        // Conectar con la base de datos !!!!!
        // Conectar con la base de datos !!!!!
        // Conectar con la base de datos !!!!!
        // Conectar con la base de datos !!!!!
        // Conectar con la base de datos !!!!!

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