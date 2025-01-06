import './shiftForm.scss';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { monthsArraySpanish } from '../../../utils/typeShifts.utils.js';

const ShiftForm = ({ shifts }) => {

    return (
        <div className='shiftForm'>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Sala</th>
                        <th>Sección</th>
                        <th>Cliente</th>
                        <th>Contacto</th>
                        <th>Suspender</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => (
                        <tr key={shift._id}>
                            <td>
                                <p>{shift.day.day}</p>
                                <p>{monthsArraySpanish(shift.day.month)}</p>
                                <p>{shift.day.year}</p>
                            </td>
                            <td>{shift.hour.map((hou) => (
                                <p key={hou}>{hou}</p>))}
                            </td>
                            <td>{shift.room}</td>
                            <td>{shift?.section || <ClearAllIcon />}</td>
                            {/*  estoy acá, lo que viene es el cliente 
                            ver de que forma lo hago si es cliente o admin */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftForm;