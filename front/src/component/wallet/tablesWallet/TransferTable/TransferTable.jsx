import './transferTable.scss';
import { Fragment, useState } from 'react';
import TimePass from '../../../utils/TimePass';
import { imgages } from '../../../../utils/imagesData.utils';
import GetTicketByOrder from '../../../ticket/GetTicketByOrder';
import ModalCustom from '../../../utils/ModalCustom/ModalCustom';
import { useLoginContext } from '../../../../context/LoginContext';
import TransferUpdTable from '../TransferUpdTable/TransferUpdTable';

const TransferTable = ({ transfers, handleConfirm, setTransfers, setLoading }) => {

    const { user } = useLoginContext();
    const [open, setOpen] = useState(false);
    const [topen, setTopen] = useState(false);
    const [whatOpen, setWhatOpen] = useState(null);
    const [vewUpd, setVewUpd] = useState(null);
    const [vewTicket, setVewTicket] = useState(null);

    const closeModal = () => { setOpen(false); setWhatOpen(null) };
    const openModal = (id) => { setWhatOpen(id); setOpen(true) };
    const handleVew = (id) => setVewUpd(vewUpd === id ? null : id)
    const closedTicket = () => { setTopen(false), setVewTicket(null) };
    const openTicket = (id) => { setVewTicket(id), setTopen(true) };

    return (
        <div className='paymentsTable'>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Usuario</th>
                        <th>Orden</th>
                        <th>Comprobante</th>
                        <th>Fecha</th>
                        {user.data.role !== 'user' && <th>Actualizar</th>}
                        <th>Confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers && transfers.docs && transfers.docs.map((trans) => (
                        <Fragment key={trans._id}>
                            <tr>
                                <td onClick={() => openModal(trans._id)} className='paymentsTableImg'>
                                    <img
                                        style={{ width: '50px' }}
                                        src={trans.imgUrl || (trans.type === 'write' ? imgages.infoLogo : imgages.weAreLooking)}
                                        alt="img"
                                    />
                                </td>
                                <td>
                                    {user.data.role !== 'user' &&
                                        <>
                                            <p>{trans.userData?.name}</p>
                                            <p>{trans.userData?.email}</p>
                                            <p>{trans.userData?.phone}</p>
                                        </>
                                    }
                                    <p>{trans.userId}</p>
                                </td>
                                <td>{trans.orderId}</td>

                                <td
                                    onClick={() => trans.confirm && openTicket(trans._id)}
                                    className={trans.confirm ? 'paymentsTableOrderConfirm' : ''}
                                >
                                    {trans.type}
                                </td>

                                <td>
                                    <p>{new Date(trans.date).toLocaleDateString()}</p>
                                    <p>Horas hábiles pasadas:<TimePass startDate={trans.date} /></p>
                                </td>
                                {user.data.role !== 'user' &&
                                    <td onClick={() => handleVew(trans._id)} className='paymentsTableUpdate'>
                                        Ver Ventana
                                    </td>
                                }
                                <td
                                    className={!trans.confirm ? 'paymentsTableOrderConfirm' : ''}
                                    onClick={user.data.role !== 'user' && !trans.confirm && handleConfirm ? () => handleConfirm(trans._id) : undefined}
                                    style={{ color: trans.confirm ? 'green' : 'red', cursor: user.data.role !== 'user' && 'pointer' }}
                                >
                                    {trans.confirm ? 'SI' : 'NO'}
                                </td>
                            </tr>

                            {whatOpen === trans._id && (
                                <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                                    {trans.type !== 'write' ? (
                                        <img
                                            style={{ width: '300px' }}
                                            src={trans.imgUrl || imgages.weAreLooking}
                                            alt="img"
                                        />
                                    ) : (
                                        <div className='paymentsTableInfo'>
                                            <h3>Información</h3>
                                            <p><strong>N° de operación:</strong> {trans.data?.operation}</p>
                                            <p><strong>Titular:</strong> {trans.data?.accountHolder}</p>
                                            <p><strong>Entidad financiera:</strong> {trans.data?.bank}</p>
                                            <p><strong>Fecha:</strong> {new Date(trans.data?.dateData).toLocaleDateString()}</p>
                                            <p><strong>Monto:</strong> {trans.data?.total}</p>
                                        </div>
                                    )}
                                </ModalCustom>
                            )}

                            {vewUpd === trans._id &&
                                <tr className='expandRow'>
                                    <td colSpan='9'>
                                        <TransferUpdTable
                                            transfer={trans}
                                            transfers={transfers}
                                            setTransfers={setTransfers}
                                            setLoading={setLoading}
                                        />
                                    </td>
                                </tr>
                            }

                            {vewTicket == trans._id &&
                                <ModalCustom modalIsOpen={topen} closeModal={closedTicket}>
                                    <GetTicketByOrder orderId={trans.orderId} />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransferTable;