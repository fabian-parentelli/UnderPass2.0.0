import './shiftForm.scss';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import { monthsArraySpanish } from '../../../utils/typeShifts.utils.js';
import ShiftSuspend from '../ShiftSuspend/ShiftSuspend.jsx';

const ShiftForm = ({ shifts, customer = false }) => {

    const [modal, setModal] = useState({ open: false, id: null });

    const handleContact = (shift) => {
        console.log(shift);
        // Esto esta para trabajar hay que genrar el contacto entre usuarios....
    };

    const handleSuspend = async (id) => setModal({ open: true, id });

    return (
        <div className='shiftForm'>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Sala</th>
                        <th>Sección</th>
                        <th>{customer ? 'Local' : 'Cliente'}</th>
                        <th>Contacto</th>
                        <th>Suspender</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => (
                        <Fragment key={shift._id}>
                            <tr>
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
                                    {customer ?
                                        <>
                                            <p>{shift?.place?.name}</p>
                                            <Link to={`/shift/${shift?.place?.shiftId}`} className='shiftFormLink' >Sitio</Link>
                                        </>
                                        : <>
                                            <p>{shift?.customerData.name}</p>
                                            <p>{shift?.customerData?.phone}</p>
                                            <p>{shift?.customerData?.email}</p>
                                        </>
                                    }
                                </td>
                                <td className='backShiftForm' onClick={() => handleContact(shift)}><ChatIcon /></td>
                                <td className='backShiftForm' onClick={() => handleSuspend(shift._id)}><BackspaceIcon /> </td>
                            </tr>
                            {modal.id === shift._id &&
                                <ModalCustom modalIsOpen={modal.open} closeModal={() => setModal({ open: false, id: null })}>
                                    <ShiftSuspend shift={shift} />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftForm;