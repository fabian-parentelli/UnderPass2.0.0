import './eventInfoTable.scss';
import { useState } from 'react';
import EventType from './EventType';
import Switch from '@mui/material/Switch';
import EventDelete from '../EventDelete/EventDelete';
import EventCategory from '../EventCategory/EventCategory';
import ChooseSites from '../../sites/ChooseSites/ChooseSites';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';

const EventInfoTable = ({ values, handleChangue, handleSubmit, handleMinors, handleTicket, handleType,
    lsEvent, isChange, handleInSite, handleInPerson }) => {

    const [vew, setVew] = useState(false);

    const hanldeClosed = () => setVew(false);
    const hanldeOpen = () => setVew(true);

    return (
        <div className='eventInfoTable'>
            <p className='eventInfoP'>Completa los campos con la información básica de tu evento.</p>

            <form id='eventInfoTableForm' onSubmit={handleSubmit}>

                <div className='eventInfoTableForm'>
                    <div>
                        <label>Título</label>
                        <input type="text" name='title' onChange={handleChangue} value={values.title} required />
                    </div>

                    <div>
                        <label>Admite menores de 18 años</label>
                        <div className='eventInfoTableFormSwitch'>
                            <p>No</p>
                            <Switch checked={values.minors} onChange={handleMinors} />
                            <p>Si</p>
                        </div>
                    </div>

                    <div>
                        <label>Día del evento</label>
                        <input type="date" name='startDate' onChange={handleChangue}
                            value={values.startDate ? new Date(values.startDate).toISOString().split('T')[0] : ''}
                            required
                        />
                    </div>

                    <div>
                        <label>Horario del evento</label>
                        <input type="time" name='startHour' onChange={handleChangue} value={values.startHour} required />
                    </div>

                    <div>
                        <label>Horario fin del evento</label>
                        <input type="time" name='endHour' onChange={handleChangue} value={values.endHour} required />
                    </div>

                    <div>
                        <label>Tipo, invitados o elenco:</label>
                        <select name="typeGuest" onChange={handleChangue} value={values.typeGuest}>
                                <option value="">Elegir</option>
                                <option value="guests">Invitados</option>
                                <option value="cast">Elenco</option>
                        </select>
                    </div>

                    <EventType values={values} handleType={handleType} handleChangue={handleChangue} />

                    <div>
                        <label>El evento es:</label>
                        <div className='eventInfoTableFormSwitch'>
                            <p>Digital</p>
                            <Switch checked={values.inPerson} onChange={handleInPerson} />
                            <p>Presencial</p>
                        </div>
                    </div>
                </div>

                <div className='eventInfoTableForm'>
                    <div>
                        <label>Categoría</label>
                        <EventCategory values={values} handleChangue={handleChangue} />
                    </div>

                    <div>
                        <label>Entradas</label>
                        <div className='eventInfoTableFormSwitch'>
                            <p>Gratis</p>
                            <Switch checked={values.tickets} onChange={handleTicket} />
                            <p>Pagas</p>
                        </div>
                    </div>

                    <div>
                        <label>Descripción</label>
                        <textarea name='description' className='eventInfoTableDes' onChange={handleChangue} value={values.description} />
                    </div>

                    <div>
                        <label>Invitados/elenco</label>
                        <input type="text" name='guests' onChange={handleChangue}
                            placeholder='Invitado 1,Invitado 2,Invitado 3' value={values.guests}
                        />
                        <p className='eventInfoTablePP'>Escribir los invitados separados por comas, pero <strong>SIN ESPACIOS</strong></p>
                    </div>

                    <ChooseSites values={values} handleInSite={handleInSite} type='evento' />
                </div>
            </form>

            <div className='eventInfoTableBtn'>

                <button className='btn btnD' onClick={hanldeOpen} disabled={!values._id}>
                    Eliminar
                </button>

                <button form='eventInfoTableForm' className='btn btnD'>
                    {!isChange ? 'Imágenes >' : (lsEvent ? 'Actualizar' : 'Guardar')}
                </button>
            </div>

            <ModalCustom modalIsOpen={vew} closeModal={hanldeClosed} >
                <EventDelete event={values} />
            </ModalCustom>

        </div>
    );
};

export default EventInfoTable;