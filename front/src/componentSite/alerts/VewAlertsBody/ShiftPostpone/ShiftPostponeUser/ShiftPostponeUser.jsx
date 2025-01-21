import './shiftPostponerUser.scss';
import { monthsArray } from '../../../../../utils/typeShifts.utils.js';

const ShiftPostponerUser = ({ postpone }) => {

    console.log(postpone);

    return (
        <div className='shiftPostponerUser'>

            <section className='shiftPostponerUserTop'>

                <div className='shiftPostponerUserImg'>
                    <h3>{postpone.shiftId.place}</h3>
                    <img src={postpone.shiftId.img} alt="img" />
                </div>

                <div className='shiftPostponerUserRight'>
                    <p><span>Fecha de Reserva:</span> {postpone.shiftId.day.day}/{monthsArray.indexOf(postpone.shiftId.day.month) + 1}/{postpone.shiftId.day.year}</p>
                    <p><span>Hora:</span> {postpone.shiftId.hour.join(' - ')}</p>
                    <p><span>Sala:</span> {postpone.shiftId.room ? postpone.shiftId.room : 'General'}</p>
                    {postpone.shiftId.sections && <p><span>Sala:</span> {postpone.shiftId.sections}</p>}
                    <p><span>Alerta generada: </span>{new Date(postpone.date).toLocaleString()}</p>
                    <p className='pgray'><span>Número de reserva:</span> {postpone.shiftId._id}</p>
                </div>

            </section>

            <p className='shiftPostponerUserMessage'>{postpone.message}</p>

            <section className='shiftPostponerUserBtn'>
                <button className='btn btnSH'>Nueva Fecha</button>
                <button className='btn btnSH'>Suspender</button>
            </section>

        </div>
    );
};

export default ShiftPostponerUser;

// Bueno sigo desde acá tengo que ver como resuelvo la nueva fecha y como suspender .....
// Bueno sigo desde acá tengo que ver como resuelvo la nueva fecha y como suspender .....
// Bueno sigo desde acá tengo que ver como resuelvo la nueva fecha y como suspender .....
// Bueno sigo desde acá tengo que ver como resuelvo la nueva fecha y como suspender .....
// Bueno sigo desde acá tengo que ver como resuelvo la nueva fecha y como suspender .....
// Bueno sigo desde acá tengo que ver como resuelvo la nueva fecha y como suspender .....