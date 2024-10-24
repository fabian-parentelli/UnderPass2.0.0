import './confirmEvent.scss';
import { useState } from 'react';
import MapView from '../../utils/MapVew.jsx';
import { useNavigate } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';
import VideosVew from '../../utils/VideosVew.jsx';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import typeEventCategory from '../../../utils/typeEventCategory.utils.js';
import { updEventConfirmApi } from '../../../helpers/event/updConfirm.api.js';

const ConfirmEvent = ({ values, setLoading, setProgres }) => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const country = localStorage.getItem('country');
    const navigate = useNavigate();

    const handleConfirm = async () => {
        setLoading(true);
        const response = await updEventConfirmApi(values._id);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Evento creado correctamente.' });
            setOpen(true);
            localStorage.removeItem('event');
        } else console.error(response.error);
        setLoading(false);
        setTimeout(() => { navigate('/') }, 2000);
    };

    return (
        <div className='confirmEvent'>
            <h3>Confirma este evento</h3>

            <section>
                <div className='confirmEventDivImg'>
                    {values && <EventCard card={values} />}
                    <button className='btn btnUE' onClick={() => setProgres(40)}>Imagen</button>
                </div>

                <div className='confirmEventDiv'>
                    <p><span>Título:</span> {values?.title}</p>
                    <p><span>Categoría:</span> {values.category && typeEventCategory(values.category)}</p>
                    <p><span>Menores de 18 años:</span> {values.minors && values.minors ? 'SI' : 'NO'}</p>
                    <p><span>Entradas:</span> {values.tickets && values.tickets ? 'Pagas' : 'Gratis'}</p>
                    <p><span>Dia del evento:</span> {values.startDate && new Date(values.startDate).toLocaleDateString()}</p>
                    <p><span>Hora del evento:</span> {values.startHour && values.startHour}hs</p>
                    <p><span>Fin del evento:</span> {values.startHour && values.endHour}hs</p>
                    <p><span>Evento:</span> {values.typePublic && values.typePublic ? 'Público' : 'Privado'}</p>
                    {values?.typePublic === false &&
                        <p><span>Contraseña:</span> {values?.password}</p>
                    }
                    <p><span>Invitados:</span> {values.guests && values.guests}</p>
                    <button className='btn btnUE' onClick={() => setProgres(20)}>Información</button>
                </div>
                <p className='confirmEventpp'><span>Descripción:</span> {values?.description}</p>
            </section>

            <button className='btn btnUE' onClick={() => setProgres(20)}>Información</button>

            <section>
                <div className='confirmEventDiv'>
                    {values.location?.coordinates?.lat && values.location?.coordinates?.lon &&
                        <div className='mapVew' style={{ marginTop: '3rem' }}>
                            <MapView coordinates={values.location.coordinates} />
                        </div>
                    }
                    <button className='btn btnUE' onClick={() => setProgres(60)}>Locación</button>
                </div>

                <div className='confirmEventDiv'>
                    <p><span>{country === 'UY' ? 'Departamento:' : 'Provincia:'}</span> {values?.location?.province}</p>
                    <p><span>Ciudad:</span> {values?.location?.city}</p>
                    <p><span>Dirección:</span> {values?.location?.address}</p>
                    <p><span>N° de puerta:</span> {values?.location?.door}</p>
                    <p><span>Lugar:</span> {values?.location?.place}</p>
                    <p><span>Latitud:</span> {values?.location?.coordinates?.lat}</p>
                    <p><span>Longitud:</span> {values?.location?.coordinates?.lon}</p>
                    <button className='btn btnUE' onClick={() => setProgres(60)}>Locación</button>
                </div>
            </section>

            {values && values.ticketInfo.length > 0 &&
                <div className='ticketsTrueVew'>
                    <table>
                        <thead>
                            <tr>
                                <th>Descripción</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Hora Ven.</th>
                                <th>Día Ven.</th>
                                <th>Activo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {values.ticketInfo.map((tick, ind) => (
                                <tr key={ind}>
                                    <td>{tick.description}</td>
                                    <td>{tick.quantity}</td>
                                    <td>${tick.price}</td>
                                    <td>{tick.hourEnd}hs</td>
                                    <td>{new Date(tick.dateEnd).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</td>
                                    <td style={{ color: tick.active ? 'green' : 'red' }}                                >
                                        {tick.active ? 'SI' : 'NO'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

            <button className='btn btnUE' onClick={() => setProgres(80)} style={{ marginTop: '1rem' }}>
                Tickets
            </button>

            {values.video &&
                <div className='confirmEventVideo'>
                    <VideosVew url={values.video} />
                    <button className='btn btnUE' onClick={() => setProgres(40)}>Imagen</button>
                </div>
            }

            <div className='confirmEventBTNEND'>
                <button className='btn btnD' onClick={() => setProgres(80)}>Volver</button>
                <button className='btn btnA' onClick={handleConfirm}>Confirmar</button>
            </div>

            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default ConfirmEvent;