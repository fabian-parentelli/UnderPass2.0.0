import './shiftTableConfig.scss';
import { Fragment, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import { monthsArray } from '../../../utils/typeShifts.utils.js';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import UserVewSmall from '../../user/UserVewSmall/UserVewSmall.jsx';

const ShiftTableConfig = ({ shifts, deleteById }) => {

    const [vew, setVew] = useState({ id: null, open: false, type: null });

    return (
        <div className='shiftTableConfig'>
            <table>

                <thead>
                    <tr>
                        <th>Ident.</th>
                        <th>Admin.</th>
                        <th>User</th>
                        <th>Romm</th>
                        <th>Sección</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {shifts && shifts.map((shift) => (
                        <Fragment key={shift._id}>
                            <tr>
                                <td className='pgray' style={{ width: '60px' }}>{shift._id}</td>

                                <Tooltip title='Administrador' placement="left-end">
                                    <td className='tableBack' onClick={() => setVew({ id: shift._id, open: true, type: shift.userId })}>
                                        <AdminPanelSettingsIcon />
                                    </td>
                                </Tooltip>

                                <Tooltip title='Usuario' placement="left-end">
                                    <td className='tableBack' onClick={() => setVew({ id: shift._id, open: true, type: shift.customerData.customerUser._id })}>
                                        <PeopleAltIcon />
                                        <p className='pgray'>{shift.customerData?.name}</p>
                                    </td>
                                </Tooltip>

                                <td>
                                    {!shift.room ? <HomeIcon /> : shift.room}
                                </td>

                                <td>
                                    {!shift.sections ? <AutoAwesomeMotionIcon /> : shift.sections}
                                </td>

                                <td>
                                    <p>{shift.day.day}/{monthsArray.findIndex(m => m === shift.day.month) + 1}/{shift.day.year}</p>
                                    {shift.hour.join(' - ')}
                                </td>

                                <td>
                                    {shift.isPay ? 'Es de pago' : 'Autogestión'}
                                </td>

                                <Tooltip title='Eliminar' placement="left-end">
                                    <td className='tableBack' onClick={() => deleteById(shift._id)}>
                                        <DeleteIcon />
                                    </td>
                                </Tooltip>

                            </tr>

                            {vew.id === shift._id &&
                                <ModalCustom modalIsOpen={vew.open} closeModal={() => setVew({ id: null, open: false, type: null })} >
                                    <UserVewSmall userId={vew.type} />
                                </ModalCustom>
                            }

                        </Fragment>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default ShiftTableConfig;