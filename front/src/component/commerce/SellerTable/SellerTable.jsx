import './sellerTable.scss';
import { Fragment, useState } from 'react';
import typeCart from '../../../utils/typeCart.utils.js';
import BigImg from '../../utils/BigImg/BigImg.jsx';

const SellerTable = ({ values }) => {

    const [vew, setVew] = useState(null);
    const handleInfo = (id) => setVew(vew === id ? null : id);

    return (
        <div className='sellerTable'>
            <table>
                <thead>
                    <tr>
                        <th>Ver</th>
                        <th>fecha</th>
                        <th>Pagado</th>
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
                                <td style={{ color: ord.pay.payIn.isPayIn ? 'green' : 'red' }}>
                                    <p>{ord.pay.payIn.isPayIn ? 'SI' : 'NO'}</p>
                                    {ord.pay.payIn.datePayIn && <p>{new Date(ord.pay.payIn.datePayIn).toLocaleDateString()}</p>}
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
                                    <td colSpan='6'>
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
                                                        <td>${item.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>${item.quantity * item.price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            }
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SellerTable;