import './sellerTable.scss';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import { imgages } from '../../../utils/imagesData.utils.js';
import GetTicketByOrder from '../../ticket/GetTicketByOrder.jsx';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { typeCart_caUtils } from '../../../utils/cart_utils/typeCart.cart.utils.js';

const SellerTable = ({ values, inWallet = false, generateOrdenPay }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(null);
    const [vewModal, setVewModal] = useState(null);
    const [open, setOpen] = useState(false);
    const [vewMpModal, setVewMpModal] = useState(null);
    const [mpOpen, setMpOpen] = useState(false);

    const handleInfo = (id) => setVew(vew === id ? null : id);
    const closeModal = () => { setOpen(false); setVewModal(null) };
    const openModal = (id) => { setVewModal(id); setOpen(true) };

    const closeMpModal = () => { setMpOpen(false); setVewMpModal(null) };
    const openMpModal = (id) => { setVewMpModal(id); setMpOpen(true) };
    
    return (
        <div className='sellerTable'>
            <table>
                <thead>
                    <tr>
                        <th>Ver</th>
                        <th>fecha</th>
                        {user.data.role !== 'user' && <th>Cliente</th>}
                        <th>Pagado</th>
                        {user.data.role !== 'user' && <th>Proveedor</th>}
                        <th>Acreditado</th>
                        <th>Cobrado</th>
                        <th>Orden</th>
                        <th>Total</th>
                        <th>Activo</th>
                        {inWallet && <th>Pagar</th>}
                    </tr>
                </thead>
                <tbody>
                    {values && values.docs && values.docs.map((ord) => (
                        <Fragment key={ord._id}>
                            <tr >
                                <td className='onClick' onClick={() => handleInfo(ord._id)}>{ord.cart.length}</td>
                                <td>{new Date(ord.date).toLocaleDateString()}</td>

                                {user.data.role !== 'user' &&
                                    <td>
                                        <p className='dataUserSeller'>{ord.buyerUserData.name}</p>
                                        <p className='dataUserSeller'>{ord.buyerUserData._id}</p>
                                        <p className='dataUserSeller'>{ord.buyerUserData.email}</p>
                                    </td>
                                }

                                <td style={{ color: ord.pay.payIn.isPayIn ? 'green' : 'red' }}>
                                    <p>{ord.pay.payIn.isPayIn ? 'SI' : 'NO'}</p>
                                    {ord.pay.payIn.datePayIn && <p>{new Date(ord.pay.payIn.datePayIn).toLocaleDateString()}</p>}
                                </td>

                                {user.data.role !== 'user' &&
                                    <td>
                                        <p className='dataUserSeller'>{ord.sellerUserData.name}</p>
                                        <p className='dataUserSeller'>{ord.sellerUserData._id}</p>
                                        <p className='dataUserSeller'>{ord.sellerUserData.email}</p>
                                    </td>
                                }

                                <td
                                    className={ord.pay.payCredited.isPayCredited ? 'sellerTableBackPoint' : ''}
                                    style={{ color: ord.pay.payCredited.isPayCredited ? 'green' : 'red' }}
                                    onClick={ord.pay.payCredited.isPayCredited ? () => openModal(ord._id) : null}
                                >
                                    <p>{ord.pay.payCredited.isPayCredited ? 'SI' : 'NO'}</p>
                                    {ord.pay.payCredited.datePayCredited && <p>{new Date(ord.pay.payCredited.datePayCredited).toLocaleDateString()}</p>}
                                </td>

                                <td
                                    className={ord?.pay?.payOut?.isPayOut ? 'sellerTableBackPoint' : ''}
                                    onClick={ord?.pay?.payOut?.isPayOut ? () => openMpModal(ord._id) : null}
                                    style={{ color: ord?.pay?.payOut?.isPayOut ? 'green' : 'red' }}
                                >
                                    <p>{ord?.pay?.payOut?.isPayOut ? 'SI' : 'NO'}</p>
                                    {ord?.pay?.payOut?.datePayOut && <p>{new Date(ord.pay.payOut.datePayOut).toLocaleDateString()}</p>}
                                </td>

                                <td style={{ fontSize: '10px' }}>{ord._id}</td>
                                <td>${ord.total}</td>
                                <td style={{ color: ord.active ? 'green' : 'red' }}>{ord.active ? 'SI' : 'NO'}</td>
                                {inWallet &&
                                    <td
                                        onClick={!ord.inWallet ? () => generateOrdenPay(ord._id) : null}
                                        className={!ord?.inWallet ? 'sellerTableBackPoint' : ''}
                                        style={{ color: ord?.inWallet ? 'green' : 'red' }}>
                                        {ord.inWallet ? 'Billetera' : 'Pagar'}
                                    </td>
                                }
                            </tr>
                            {vew === ord._id &&
                                <tr className="scale-up-animation">
                                    <td colSpan='7'>
                                        <table>
                                            <thead>
                                                <tr className='nonTr'>
                                                    <th>Imagen</th>
                                                    <th>Titulo</th>
                                                    <th>Tipo</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Sub-Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ord.cart.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <BigImg
                                                                img={item.data.img ? item.data.img : imgages.menTv}
                                                                border={false}
                                                            />
                                                        </td>
                                                        <td>{item.data?.name} {item.data?.title}</td>
                                                        <td>{typeCart_caUtils(item?.is)}</td>
                                                        <td>${item?.data?.price}</td>
                                                        <td>{item?.quantity}</td>
                                                        <td>${item?.quantity * item?.data?.price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            }
                            {ord.pay.payIn.isPayIn && user.data.role === 'user' &&
                                <tr>
                                    <td colSpan={'7'}>
                                        <Link className='sellerTableCallToUser'>Comunicarte con el cliente</Link>
                                    </td>
                                </tr>
                            }

                            {vewModal === ord._id &&
                                <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                                    <GetTicketByOrder orderId={ord._id} />
                                </ModalCustom>
                            }

                            {vewMpModal === ord._id && ord.pay.payOut.payOutData.ticketImg &&
                                <ModalCustom modalIsOpen={mpOpen} closeModal={closeMpModal}>
                                    <img style={{ width: '280px' }} src={ord.pay.payOut.payOutData.ticketImg} alt="img" />
                                </ModalCustom>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SellerTable;