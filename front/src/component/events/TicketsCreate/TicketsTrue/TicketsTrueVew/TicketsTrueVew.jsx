import './ticketsTrueVew.scss';
import { Fragment, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TicketsTrueForm from '../TicketsTrueForm/TicketsTrueForm';
import ModalCustom from '../../../../utils/ModalCustom/ModalCustom';

const TicketsTrueVew = ({ tickets, setTickets, values }) => {

    const [vew, setVew] = useState({ index: null, open: false });
    const [ticket, setTicket] = useState({ active: true });

    const modalClosed = () => setVew({ index: null, open: false });
    const modalOpen = (index) => {
        setVew({ index: index, open: true });
        setTicket({ ...tickets[index] });
    };

    const hanldeActive = (index) => {
        const allTickets = [...tickets];
        allTickets[index].active = !allTickets[index].active;
        setTickets(allTickets);
    };

    const hanldeDelete = (index) => {
        const allTickets = [...tickets];
        allTickets.splice(index, 1);
        setTickets(allTickets);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allTickets = [...tickets];
        allTickets[vew.index] = ticket;
        setTickets(allTickets);
        modalClosed();
    };

    return (
        <div className='ticketsTrueVew'>
            <table>
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Hora Ven.</th>
                        <th>Día Ven.</th>
                        <th>Activo</th>
                        <th>Eliminar</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets && tickets.map((tick, ind) => (
                        <Fragment key={ind}>
                            <tr >
                                <td>{tick.description}</td>
                                <td>{tick.quantity}</td>
                                <td>${tick.price}</td>
                                <td>{tick.hourEnd}hs</td>
                                <td>{new Date(tick.dateEnd).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</td>

                                <Tooltip title={tick.active ? 'Desactivar' : 'Activar'} placement='left' >
                                    <td
                                        style={{ color: tick.active ? 'green' : 'red' }}
                                        className='ticketsTrueVewBack'
                                        onClick={() => hanldeActive(ind)}
                                    >
                                        {tick.active ? 'SI' : 'NO'}
                                    </td>
                                </Tooltip>

                                <td
                                    className='ticketsTrueVewBack'
                                    onClick={() => hanldeDelete(ind)}
                                >
                                    <DeleteIcon />
                                </td>

                                <td
                                    className='ticketsTrueVewBack'
                                    onClick={() => modalOpen(ind)}
                                >
                                    <SyncAltIcon />
                                </td>
                            </tr>

                            {vew.index === ind &&
                                <ModalCustom modalIsOpen={modalOpen} closeModal={modalClosed}>
                                    <TicketsTrueForm
                                        values={values}
                                        handleSubmit={handleSubmit}
                                        ticket={ticket}
                                        setTicket={setTicket}
                                    />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketsTrueVew;