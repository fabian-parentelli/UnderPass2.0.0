import './mapNoMatch.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapView from '../../../../component/utils/MapVew';
import { getEventByIdApi } from '../../../../helpers/event/getEventById.api.js';
import { updEventApi } from '../../../../helpers/event/updEvent.api.js';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert';

const MapNoMatch = ({ id, setLoading }) => {

    const [event, setEvent] = useState(null);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useState(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getEventByIdApi(id);
            if (response.status === 'success') setEvent(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleChangue = (e) => {
        setEvent(prevEvent => ({
            ...prevEvent, location: {
                ...prevEvent.location, coordinates: {
                    ...prevEvent.location.coordinates, [e.target.name]: e.target.value
                }
            }
        }));
    };

    const handleUpdate = async () => {
        setLoading(true);
        const response = await updEventApi(event);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Mapa actualizado correctamente' });
            setOpen(true);
            setTimeout(() => { navigate('/') }, 2000);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='mapNoMatch'>
            {event && event.location && event.location.coordinates &&
                <section>
                    <div className='mapNoMatchNoMatch'>
                        <MapView coordinates={event.location.coordinates} />
                    </div>
                    <div className='noMatchInputs'>
                        <div>
                            <label>Latitud</label>
                            <input type="text" name='lat' value={event.location.coordinates.lat} onChange={handleChangue} />
                        </div>
                        <div>
                            <label>Longitud</label>
                            <input type="text" name='lon' value={event.location.coordinates.lon} onChange={handleChangue} />
                        </div>
                        <div>
                            <label>Dirección</label>
                            <p>{event.location.place}</p>
                            <p>{event.location.address} {event.location.door}</p>
                            <p>{event.location.city} - {event.location.province} - {event.location.country}</p>
                            <button className='btn btnUE' onClick={handleUpdate}>Actualizar</button>
                        </div>
                    </div>
                </section>
            }
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default MapNoMatch;