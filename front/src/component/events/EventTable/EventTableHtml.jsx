import './eventTable.scss';
import { Fragment } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import EventTypeImg from '../EventTypeImg/EventTypeImg';
import UpdEventImg from '../UpdEventImg/UpdEventImg.jsx';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import typeEventCategory from '../../../utils/typeEventCategory.utils.js';
import UpdEventInfo from '../UpdInfoEvent/UpdInfoEvent.jsx';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import UpdTicketEvent from '../UpdTicketEvent/UpdTicketEvent.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import UserVewSmall from '../../user/UserVewSmall/UserVewSmall.jsx';
import EventDelete from '../EventDelete/EventDelete.jsx';
import UpdEventStream from '../UpdEventStream/UpdEventStream.jsx';

const EventTableHtml = ({ events, closedImg, openImg, vewImg, setEvents, vewInfo, closedInfo, openInfo,
    vewTicket, closedTicket, openTicket, handleActive, vewUser, closedUser, openUser, vewDelete, closedDelete,
    openDelete, vewStream, openStream, closedStream }) => {

    const { user } = useLoginContext();

    console.log(events);
    

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
                        {user.data.role !== 'user' && <th>Usuario</th>}
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

                                <Tooltip
                                    title={user.data.role !== 'user' && 'Eliminar este evento'}
                                    placement="right-start"
                                >
                                    <td
                                        className={user.data.role !== 'user' && 'eventTableBack'}
                                        onClick={user.data.role !== 'user' && eve.dateCreate ? () => openDelete(eve._id) : undefined}
                                    >{eve.title}</td>
                                </Tooltip>

                                <td>{typeEventCategory(eve.category)}</td>

                                <Tooltip title={!eve.inPerson && 'Actualizar links'} placement="left-start">
                                    <td
                                        className={!eve.inPerson && 'eventTableBack'}
                                        onClick={!eve.inPerson ? () => openStream(eve._id) : undefined}
                                    >
                                        {!eve.inPerson
                                            ? <p className='colUE'>Stream</p>
                                            : <>
                                                <p>{eve.location.city}</p>
                                                <p>{eve.location.province}</p>
                                            </>
                                        }
                                    </td>
                                </Tooltip>

                                <td>{eve.location.place ? eve.location.place : ''}</td>

                                <td>{new Date(eve.startDate).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</td>
                                <td>{eve.startHour}hs</td>

                                <td>{eve.typePublic ? 'SI' : 'NO'}</td>

                                {user.data.role !== 'user' &&
                                    <Tooltip title='Ver usuario' placement="left-start">
                                        <td
                                            onClick={() => openUser(eve._id)}
                                            className='eventTableBack'
                                        >
                                            <PersonIcon />
                                        </td>
                                    </Tooltip>
                                }

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
                                        onClick={() => handleActive(eve._id)}
                                    >
                                        {eve.active ? 'SI' : 'NO'}
                                    </td>
                                </Tooltip>
                            </tr>

                            {
                                vewDelete.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewDelete.open} closeModal={closedDelete}>
                                    <EventDelete event={eve} closedDelete={closedDelete} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }

                            {
                                vewImg.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewImg.open} closeModal={closedImg}>
                                    <UpdEventImg event={eve} closedImg={closedImg} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }

                            {
                                vewInfo.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewInfo.open} closeModal={closedInfo}>
                                    <UpdEventInfo event={eve} closedInfo={closedInfo} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }

                            {
                                vewTicket.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewTicket.open} closeModal={closedTicket}>
                                    <UpdTicketEvent event={eve} closedTicket={closedTicket} setEvents={setEvents} events={events} />
                                </ModalCustom>
                            }

                            {
                                vewUser.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewUser.open} closeModal={closedUser}>
                                    <UserVewSmall userId={eve.userId} />
                                </ModalCustom>
                            }

                            {
                                vewStream.vew === eve._id &&
                                <ModalCustom modalIsOpen={vewStream.open} closeModal={closedStream}>
                                    <UpdEventStream event={eve} closedStream={closedStream} events={events} setEvents={setEvents} />
                                </ModalCustom>
                            }

                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default EventTableHtml;