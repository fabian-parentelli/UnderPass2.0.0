import './eventlocation.scss';
import { useState } from 'react';
import EventLocationForm from './EventLocationForm/Eventlocationform.jsx';
import { getCoordinatesApi } from '../../../helpers/maps/getCoordinates.api.js';
import MapView from '../../utils/MapVew.jsx';

const Eventlocation = ({ values, setValues, setLoading, setProgres }) => {

    const country = localStorage.getItem('country');
    const [locations, setLocations] = useState({ country });

    const handleChange = (e) => setLocations({ ...locations, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getCoordinatesApi(locations);
        if (response.length > 0) {
            // guardar en la base de datos.......
            setLocations({ ...locations, coordinates: { lat: response[0].lat, lon: response[0].lon } });
        };
        setLoading(false);
    };

    return (
        <div className='eventlocation'>
            <p className='eventlocationpp'>Primero brinda la información de localización, luego confirma el mapa.</p>
            <EventLocationForm handleChange={handleChange} country={country} handleSubmit={handleSubmit} />

            {locations.coordinates &&
                <div className='mapVew' style={{marginTop: '3rem'}}>
                    <MapView coordinates={locations.coordinates} />
                </div>
            }

            
        </div>
    );
};

export default Eventlocation;