import './transferSendTable.scss';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flagsIcon from '../../../utils/flagsIcon.utils.js';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';

const TransferSendTable = ({ transfers }) => {

    const [open, setOpen] = useState(false);
    const [vewTicket, setVewTicket] = useState(null);
    const [vew, setVew] = useState(null);
    const navigate = useNavigate();

    const hamdleVew = (id) => setVew(vew === id ? null : id);
    const closedModal = () => { setOpen(false); setVewTicket(null) };
    const openModal = (id) => { setVewTicket(id); setOpen(true) };

    return (
        <div className='TransferSendTable'>
            <table>
                <thead>
                    <tr>
                        <th>Ticket</th>
                        <th>País</th>
                        <th>Interacción</th>
                        <th>N° Operación</th>
                        <th>Total</th>
                        <th>Ordenes</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers && transfers.map((tra) => (
                        <Fragment key={tra._id}>
                            <tr>
                                <td className='TransferSendTableBack' onClick={() => openModal(tra._id)}>
                                    <img style={{ borderRadius: '1px' }} src={tra.imgUrl} alt="img" />
                                </td>

                                <td><img className='TransferSendTableFlags'
                                    src={tra.country === 'UY' ? flagsIcon.uy : flagsIcon.ar} alt="img2" />
                                </td>

                                <td>
                                    <p><span>De:</span>{tra.data.accountHolder}</p>
                                    <p><span>Para:</span>{tra.data.customer}</p>
                                </td>

                                <td>
                                    <p>{tra.data.operation}</p>
                                    <p style={{ fontSize: '10px' }}><span>ID:</span> {tra._id}</p>
                                </td>
                                <td>${tra.data.total}</td>
                                <td className='TransferSendTableBack' onClick={() => hamdleVew(tra._id)}>Ver</td>
                            </tr>

                            {vew === tra._id &&
                                <tr >
                                    <td colSpan='6' className='TransferSendTableOrders'>
                                        {tra.orderId.map((ord) => (
                                            <p key={ord} onClick={() => navigate(`/vewtransferpay/${ord}`)}>
                                                <span>Orden:</span> {ord}
                                            </p>
                                        ))}
                                    </td>
                                </tr>
                            }

                            {vewTicket === tra._id &&
                                <ModalCustom modalIsOpen={open} closeModal={closedModal}>
                                    <img src={tra.imgUrl} alt="img" style={{width: '300px'}} />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransferSendTable;