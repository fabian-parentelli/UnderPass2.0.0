import './updEventInfo.scss'
import Switch from '@mui/material/Switch';
import EventType from '../EventInfo/EventType';
import EventCategory from '../EventCategory/EventCategory';
import SelectedProvince from '../../utils/SelectedProvince';
import { useLoginContext } from '../../../context/LoginContext';
import ChooseSites from '../../sites/ChooseSites/ChooseSites';

const UpdInfoEventHtml = ({ values, handleChange, handleSubmit, handleMinors, handleTicket, handleType,
    handleLocation, handleCoordenates, setValues }) => {

    const country = localStorage.getItem('country');
    const { user } = useLoginContext();

    return (
        <form className='updEventInfo' onSubmit={handleSubmit}>
            <h3>Informaación del evento</h3>

            <div>
                <label>Título</label>
                <input type="text" name='title' value={values.title || ''} onChange={handleChange} />
            </div>

            <div>
                <label>Categoría</label>
                <EventCategory values={values} handleChangue={handleChange} />
            </div>

            <div>
                <label>Admite menores 18 años</label>
                <div className='updEventInfoSwitch'>
                    <p>No</p>
                    <Switch checked={values.minors} onChange={handleMinors} />
                    <p>SI</p>
                </div>
            </div>

            <div className='line'></div>

            <div>
                <label>Entradas</label>
                <div className='updEventInfoSwitch'>
                    <p>Gratis</p>
                    <Switch checked={values.tickets} onChange={handleTicket} />
                    <p>Pagas</p>
                </div>
            </div>

            <div>
                <label>Día del evento</label>
                <input type="date" name='startDate' onChange={handleChange}
                    value={values.startDate ? new Date(values.startDate).toISOString().split('T')[0] : ''}
                    required
                />
            </div>

            <div>
                <label>Horario del evento</label>
                <input type="time" name='startHour' onChange={handleChange} value={values.startHour || ''} required />
            </div>

            <div>
                <label>Horario fin del evento</label>
                <input type="time" name='endHour' onChange={handleChange} value={values.endHour || ''} required />
            </div>

            <div>
                <EventType values={values} handleType={handleType} handleChangue={handleChange} />
            </div>

            <div>
                <label>Tipo, invitados o elenco:</label>
                <select name="typeGuest" onChange={handleChange} value={values.typeGuest}>
                    <option value="">Elegir</option>
                    <option value="guests">Invitados</option>
                    <option value="cast">Elenco</option>
                </select>
            </div>

            <div>
                <label>Tipo, invitados, o elenco:</label>
                <select name="typeGuest" value={values.typeGuest || ''} onChange={handleChange}>
                    <option value="">Elegír</option>
                    <option value="guests">Invitados</option>
                    <option value="cast">Elenco</option>
                </select>
            </div>

            <div>
                <label>Invitados</label>
                <input type="text" name='guests' onChange={handleChange}
                    placeholder='Invitado1,Invitado2,Invitado3' value={values.guests || ''}
                />
                <p className='eventInfoTablePP'>Escribir los invitados separados por comas, pero <strong className='colUE'>SIN ESPACIOS</strong></p>
            </div>

            <div>
                <label>Descripción</label>
                <textarea name='description' className='eventInfoTableDes' onChange={handleChange} value={values.description} />
            </div>

            <div>
                <label>Video</label>
                <input type="text" name='video' value={values.video || ''} onChange={handleChange} />
            </div>

            <div>
                <label>{country === 'UY' ? 'Departamento' : 'Provincia'}</label>
                <SelectedProvince handleChange={handleLocation} required={true} coun={country} value={values.location.province} />
            </div>

            <div>
                <label>Ciudad</label>
                <input type="text" name='city' onChange={handleLocation} value={values.location.city} />
            </div>

            {values.location.address && values.location.door && values.location.place && values.location.coordinates.lat && values.location.coordinates.lon &&
                <>
                    <div>
                        <label>Direccón</label>
                        <input type="text" name='address' onChange={handleLocation} value={values?.location?.address} />
                    </div>

                    <div>
                        <label>Número de Puerta</label>
                        <input type="text" name='door' onChange={handleLocation} value={values?.location?.door} />
                    </div>

                    <div>
                        <label>Lugar <span>Teatro, bar, centro cultural, etc</span></label>
                        <input type="text" name='place' onChange={handleLocation} value={values?.location?.place} />
                    </div>

                    <div>
                        <label>Latitud</label>
                        <input type="text" name='lat' onChange={handleCoordenates} value={values?.location?.coordinates?.lat} />
                    </div>

                    <div>
                        <label>Longitud</label>
                        <input type="text" name='lon' onChange={handleCoordenates} value={values?.location?.coordinates?.lon} />
                    </div>
                </>
            }

            <ChooseSites values={values} type='evento' setValues={setValues} vew={false} />

            {user.data.role !== 'user' && values.dateCreate &&
                <div>
                    <label>Feha de creación</label>
                    <p>{new Date(values.dateCreate).toLocaleDateString()}</p>
                </div>
            }

            <button className='btn btnUE'>Actualizar</button>
        </form>
    );
};

export default UpdInfoEventHtml;