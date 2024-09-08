import './sellerTable.scss';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import typeCart from '../../../utils/typeCart.utils.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { Link } from 'react-router-dom';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import GetTicketByOrder from '../../ticket/GetTicketByOrder.jsx';

const SellerTable = ({ values }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(null);

    const [vewModal, setVewModal] = useState(null);
    const [open, setOpen] = useState(false);

    const handleInfo = (id) => setVew(vew === id ? null : id);

    const closeModal = () => { setOpen(false); setVewModal(null) };
    const openModal = (id) => { setVewModal(id); setOpen(true) };

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
                                    onClick={ord.pay.payCredited.isPayCredited ? () => openModal(ord._id) : ''}
                                >
                                    <p>{ord.pay.payCredited.isPayCredited ? 'SI' : 'NO'}</p>
                                    {ord.pay.payCredited.datePayCredited && <p>{new Date(ord.pay.payCredited.datePayCredited).toLocaleDateString()}</p>}
                                </td>

                                <td style={{ color: ord.pay.payOut.isPayOut ? 'green' : 'red' }}>
                                    <p>{ord.pay.payOut.isPayOut ? 'SI' : 'NO'}</p>
                                    {ord.pay.payOut.datePayOut && <p>{new Date(ord.pay.payIn.datePayOut).toLocaleDateString()}</p>}
                                </td>

                                <td>{ord._id}</td>
                                <td>${ord.total}</td>
                                <td style={{ color: ord.active ? 'green' : 'red' }}>{ord.active ? 'SI' : 'NO'}</td>
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
                                                                img={item.data.img[0] ? item.data.img[0].imgUrl : imgages.menTv}
                                                                border={false}
                                                            />
                                                        </td>
                                                        <td>{item.data?.name} {item.data?.title}</td>
                                                        <td>{typeCart(item.is)}</td>
                                                        <td>${item.data.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>${item.quantity * item.data.price}</td>
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
                                <ModalCustom  modalIsOpen={open} closeModal={closeModal}>
                                    <GetTicketByOrder orderId={ord._id} />
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