import './shiftPanelDasConfTable.scss';
import { Fragment, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BigImg from '../../../../../component/utils/BigImg/BigImg';
import ModalCustom from '../../../../../component/utils/ModalCustom/ModalCustom.jsx';
import UserVewSmall from '../../../../../component/user/UserVewSmall/UserVewSmall.jsx';
import { daysOfWeekTable, typeShiftCategory } from '../../../../../utils/typeShifts.utils.js';

const ShiftPanelDasConfTable = ({ configs, handleActive }) => {

    const [vew, setVew] = useState({ id: null, open: false });
    const handleOpen = (id) => setVew({ id: id, open: true });

    return (
        <div className='shiftPanelDasConfTable'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Días</th>
                        <th>Horarios</th>
                        <th>Rooms</th>
                        <th>Secciones</th>
                        <th>Usuario</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {configs && configs.map((conf, ind) => (
                        <Fragment key={ind}>
                            <tr>
                                <th style={{ paddingTop: '3px' }}>{<BigImg img={conf.img.url} border={false} />}</th>
                                <th>{conf.title}</th>
                                <th>{typeShiftCategory(conf.category)}</th>
                                <th>
                                    {conf.days.length === 7
                                        ? <p>Todos</p>
                                        : conf.days.map((day, ind) => (
                                            <p className='pgray' key={ind}>{daysOfWeekTable(day)}</p>
                                        ))}
                                </th>
                                <th>
                                    <p className='pgray'><span style={{ color: 'black' }}>Apertura:</span> {conf.hour.startHour}</p>
                                    <p className='pgray'><span style={{ color: 'black' }}>Cierre:</span> {conf.hour.endHour}</p>
                                    <p className='pgray'><span style={{ color: 'black' }}>Fracción:</span> {conf.hour.fractionHour}</p>
                                </th>
                                <th>{conf.rooms}</th>
                                <th>
                                    {(conf.roomsData || []).map((room, ind) => (
                                        <p key={ind} className='pgray'>{room.name} {room.sections.length}</p>
                                    ))}
                                </th>
                                <th>
                                    <Tooltip title={'Usuario'} placement="left">
                                        <AccountBoxIcon
                                            className='shiftPanelDasConfTableIcon'
                                            onClick={() => handleOpen(conf._id)}
                                        />
                                    </Tooltip>
                                </th>

                                <th
                                    style={{ color: conf.active ? 'green' : 'red' }}
                                    className='shiftPanelDasConfTableBack'
                                    onClick={() => handleActive(conf._id)}
                                >
                                    <Tooltip title={conf.active ? 'Desactivar' : 'Activar'} placement='left'>
                                        {conf.active ? 'SI' : 'NO'}
                                    </Tooltip>
                                </th>
                            </tr>

                            {vew.id === conf._id &&
                                <ModalCustom modalIsOpen={vew.open} closeModal={() => setVew({ id: null, open: false })}>
                                    <UserVewSmall userId={conf.userId} />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftPanelDasConfTable;