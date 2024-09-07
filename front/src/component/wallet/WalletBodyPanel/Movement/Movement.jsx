import './movement.scss';
import { Fragment, useState } from 'react';
import ModalCustom from '../../../utils/ModalCustom/ModalCustom';
import MovementTicket from './MovementTicket/MovementTicket';

const Movement = ({ wallet }) => {

    const [vew, setVew] = useState(null);
    const [open, setOpen] = useState(false);

    const closeModal = () => { setOpen(false); setVew(null) };
    const openModal = (id) => { setVew(id); setOpen(true) };

    return (
        <div className='movement'>
            <table>
                <thead>
                    <tr>
                        <th>Transacción</th>
                        <th>Tipo</th>
                        <th>Con</th>
                        <th>fecha</th>
                        <th>ticket</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {wallet && wallet.money &&
                        wallet.money.sort((a, b) => new Date(b.date) - new Date(a.date)).map((mon) => (
                            <Fragment key={mon._id}>
                                <tr>
                                    <td style={{ color: mon.type ? 'green' : 'red' }}>
                                        {mon.type ? 'Ingreso' : 'Egreso'}
                                    </td>
                                    <td>{transaction(mon.TypeMotion)}</td>
                                    <td>{mon.byTo}</td>
                                    <td>{new Date(mon.date).toLocaleDateString()}</td>

                                    <td
                                        onClick={() => openModal(mon._id)}
                                        className='movementTicket'
                                    >{mon.ticket}</td>

                                    <td>${mon.cash} {wallet.country}</td>
                                </tr>
                                {vew === mon._id &&
                                    <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                                        <MovementTicket ticketId={mon.ticket} />
                                    </ModalCustom>
                                }
                            </Fragment>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Movement;

function transaction(types) {
    const data = {
        'transfer': () => { return 'Transferencia' },
        'default': () => { return 'otro' },
    };
    return (data[types] || data['default'])();
};