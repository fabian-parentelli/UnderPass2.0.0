import './eventTable.scss';
import { Fragment } from 'react';
import Tooltip from '@mui/material/Tooltip';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import EventTypeImg from '../EventTypeImg/EventTypeImg';
import UpdEventImg from '../UpdEventImg/UpdEventImg.jsx';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import typeEventCategory from '../../../utils/typeEventCategory.utils.js';
import UpdEventInfo from '../UpdInfoEvent/UpdInfoEvent.jsx';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import UpdTicketEvent from '../UpdTicketEvent/UpdTicketEvent.jsx';

const EventTableHtml = ({ events, closedImg, openImg, vewImg, setLoading, setEvents,
    vewInfo, closedInfo, openInfo, vewTicket, closedTicket, openTicket }) => {

    return (
        <div className='eventTableHtml'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Locación</th>
                        <th>Lugar</th>
                        <th>Día</th>
                        <th>Hora</th>
                        <th>Público</th>
                        <th>Actualizar</th>
                        <th>Entradas</th>
                        <th>Activo</th>
                    </tr>
                </thead>

                <tbody>
                    {events && events.docs.map((eve) => (
                        <Fragment key={eve._id}>
                            <tr className='eventTableBody'>

                                <Tooltip title='Modificar imágen' placement="right-start">
                                    <td className='eventTableBack' onClick={() => openImg(eve._id)}>
                                        <EventTypeImg card={eve} />
                                    </td>
                                </Tooltip>

                                <td>{eve.title}</td>
                                <td>{typeEventCategory(eve.category)}</td>
                                <td>
                                    <p>{eve.location.city}</p>
                                    <p>{eve.location.province}</p>
                                </td>
                                <td>{eve.location.place}</td>

                                <td>{new Date(eve.startDate).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</td>
                                <td>{eve.startHour}hs</td>

                                <td>{eve.typePublic ? 'SI' : 'NO'}</td>

                                <Tooltip title='Actualizar' placement="left-start">
                                    <td
                                        onClick={() => openInfo(eve._id)}
                                        className='eventTableBack'
                                    >
                                        {<SyncAltIcon />}
                                    </td>
                                </Tooltip>

                                <Tooltip title='Entradas' placement="left-start">
                                    <td
                                        onClick={() => openTicket(eve._id)}
                                        className='eventTableBack'
                                    >
                                        <ConfirmationNumberIcon />
                                    </td>
                                </Tooltip>

                                <Tooltip title={eve.active ? 'Desactivar' : 'Activar'} placement="left-start">
                                    <td
                                        className='eventTableBack'
                                        style={{ color: eve.active ? 'green' : 'red' }}
                                    >
                                        {eve.active ? 'SI' : 'NO'}
                                    </td>
                                </Tooltip>
                            </tr>

                            {vewImg.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewImg.open} closeModal={closedImg}>
                                    <UpdEventImg event={eve} closedImg={closedImg} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }

                            {vewInfo.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewInfo.open} closeModal={closedInfo}>
                                    <UpdEventInfo event={eve} closedInfo={closedInfo} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }

                            {vewTicket.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewTicket.open} closeModal={closedTicket}>
                                    <UpdTicketEvent event={eve} closedInfo={closedInfo} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTableHtml;