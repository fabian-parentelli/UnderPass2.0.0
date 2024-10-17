import './eventlocation.scss';
import { useState } from 'react';
import MapView from '../../utils/MapVew.jsx';
import { updEventApi } from '../../../helpers/event/updEvent.api.js';
import EventLocationForm from './EventLocationForm/Eventlocationform.jsx';
import { getCoordinatesApi } from '../../../helpers/maps/getCoordinates.api.js';
import UnderEventsLog from '../../fonts/UnderEventsLog/UnderEventsLog.jsx';

const Eventlocation = ({ values, setValues, setLoading, setProgres }) => {

    const country = localStorage.getItem('country');
    const [location, setLocation] = useState({
        province: values?.location?.province || '', city: values?.location?.city || '',
        address: values?.location?.address || '', place: values?.location?.place || '',
        door: values?.location?.door || '', country: values?.location?.country || country,
        coordinates: {
            lat: values?.location?.coordinates?.lat || '',
            lon: values?.location?.coordinates?.lon || ''
        }
    });

    const handleChange = (e) => setLocation({ ...location, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getCoordinatesApi(location);
        if (response.length > 0) {
            setLocation({ ...location, coordinates: { lat: response[0].lat, lon: response[0].lon } });
        };
        setLoading(false);
    };

    const handleSave = async () => {
        setLoading(true);
        const obj = { ...values, location };
        const resp = await updEventApi(obj);
        if (resp.status === 'success') { setValues(resp.result); setProgres(80) }
        else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='eventlocation'>
            <p className='eventlocationpp'>Primero brinda la información de localización, luego confirma el mapa.</p>
            <EventLocationForm handleChange={handleChange} country={country} handleSubmit={handleSubmit} location={location} />

            {location.coordinates.lat !== '' && location.coordinates.lon !== '' &&
                <div className='mapVew' style={{ marginTop: '3rem' }}>
                    <MapView coordinates={location.coordinates} />
                </div>
            }

            {location.coordinates.lat !== '' && location.coordinates.lon !== '' &&
                <div className='eventImagesBtnsBotton'>
                    <button className='btn eventlocationBtn' onClick={handleSave}>No coincide</button>
                    <button className='btn eventlocationBtn' onClick={handleSave}>Confirmar</button>
                </div>
            }

            <div className='eventImagesBtnsBotton'>
                <button className='btn btnD' onClick={() => setProgres(40)}>Volver</button>
                <button className='btn btnD' onClick={() => setProgres(80)}>Continuar</button>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <UnderEventsLog size={3} />
            </div>
        </div>
    );
};

export default Eventlocation;