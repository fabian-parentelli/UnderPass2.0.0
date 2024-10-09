import './eventInfoTable.scss';
import Switch from '@mui/material/Switch';
import EventCategory from '../EventCategory/EventCategory';
import EventType from './EventType';

const EventInfoTable = ({ values, handleChangue, handleSubmit, handleMinors, handleTicket, handleType }) => {

    return (
        <div className='eventInfoTable'>
            <p className='eventInfoP'>Completa los campos con la información básica de tu evento.</p>

            <form id='eventInfoTableForm' onSubmit={handleSubmit}>

                <div className='eventInfoTableForm'>
                    <div>
                        <label>Título</label>
                        <input type="text" name='title' onChange={handleChangue} required />
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
                        <input type="date" name='startDate' onChange={handleChangue} required />
                    </div>

                    <div>
                        <label>Horario del evento</label>
                        <input type="time" name='startHour' onChange={handleChangue} required />
                    </div>

                    <div>
                        <label>Horario fin del evento</label>
                        <input type="time" name='endHour' onChange={handleChangue} required />
                    </div>

                    <EventType values={values} handleType={handleType} handleChangue={handleChangue} />
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
                        <textarea name='description' className='eventInfoTableDes' onChange={handleChangue} />
                    </div>

                    <div>
                        <label>Invitados</label>
                        <input type="text" name='guests' onChange={handleChangue} 
                            placeholder='Invitado1,Invitado2,Invitado3'
                        />
                        <p className='eventInfoTablePP'>Escribir los invitados separados por comas, pero <strong>SIN ESPACIOS</strong></p>
                    </div>
                </div>
            </form>

            <div className='eventInfoTableBtn'>
                <button form='eventInfoTableForm' className='btn btnD'>
                    Continuar
                </button>
            </div>

        </div>
    );
};

export default EventInfoTable;