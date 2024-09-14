import './movementsCashTable.scss';
import { Fragment, useState } from 'react';
import flagsIcon from '../../../../../../../utils/flagsIcon.utils.js';
import GetTicketById from '../../../../../../../component/ticket/GetTicketById.jsx';
import ModalCustom from '../../../../../../../component/utils/ModalCustom/ModalCustom.jsx';
import GetTicketByTransferPay from '../../../../../../../component/ticket/GetTicketByTransferPay.jsx';

const MovementsCashTable = ({ movements }) => {

    const [open, setOpen] = useState(false);
    const [vew, setVew] = useState(null);

    const closeModal = () => { setOpen(false); setVew(null) };
    const openModal = (id) => { setVew(id); setOpen(true) };

    return (
        <div className='movementsCashTable'>
            <table>
                <thead>
                    <tr>
                        <th>Transacción</th>
                        <th>Fecha</th>
                        <th>País</th>
                        <th>Tipo</th>
                        <th>Dif-Caja</th>
                        <th>Caja</th>
                        <th>Dif-Tesoro</th>
                        <th>Tesoro</th>
                        <th>Ticket</th>
                    </tr>
                </thead>
                <tbody>
                    {movements && movements.map((mov) => (
                        <Fragment key={mov._id}>
                            <tr>
                                <td>
                                    <p style={{ color: mov.inOut === 'out' ? 'red' : 'green' }}>
                                        {mov.inOut === 'out' ? 'Egreso' : 'Ingreso'}
                                    </p>
                                    <p style={{ fontSize: '10px' }}>{mov._id}</p>
                                </td>
                                <td>{new Date(mov.date).toLocaleDateString()}</td>
                                <td className='movementsCashTableImg'>
                                    <img src={mov.country === 'UY' ? flagsIcon.uy : flagsIcon.ar} alt="flags" />
                                </td>
                                <td>{mov?.type}</td>
                                <td style={{ color: mov.difCash > 0 ? 'green' : 'red' }}>{mov?.difCash}</td>
                                <td>${mov?.cash}</td>
                                <td style={{ color: mov.difTreasure > 0 ? 'green' : 'red' }}>{mov?.difTreasure}</td>
                                <td>${mov?.treasure}</td>

                                <td onClick={() => openModal(mov._id)} className='movementsCashTableOpen'>
                                    {mov?.ticketId}
                                </td>
                            </tr>

                            {vew === mov._id &&
                                <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                                    {mov.type === 'Mercado Pago'
                                        ? <GetTicketByTransferPay ticketId={mov?.ticketId} />
                                        : <GetTicketById ticketId={mov?.ticketId} />
                                    }
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MovementsCashTable;