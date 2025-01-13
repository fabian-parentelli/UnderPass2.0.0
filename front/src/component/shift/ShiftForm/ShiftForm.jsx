import './shiftForm.scss';
import ChatIcon from '@mui/icons-material/Chat';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { monthsArraySpanish } from '../../../utils/typeShifts.utils.js';

const ShiftForm = ({ shifts }) => {

    const handleContact = (shift) => {
        console.log(shift);
        // Esto esta para trabajar hay que genrar el contacto entre usuarios....
    };

    const handleSuspend = async (id) => {
        // Aca rederigimos para suspender/modificar el turno......
    };

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
                            <td style={{ textAlign: !shift?.sections && 'center' }} >{shift?.sections || <ClearAllIcon />}</td>
                            <td>
                                <p>{shift?.customerData.name}</p>
                                <p>{shift?.customerData?.phone}</p>
                                <p>{shift?.customerData?.email}</p>
                            </td>
                            <td className='backShiftForm' onClick={()=> handleContact(shift)} ><ChatIcon /></td>
                            <td className='backShiftForm' onClick={()=> handleSuspend(shift._id)} ><BackspaceIcon /> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftForm;