import './shopingTable.scss';
import { Fragment, useState } from 'react';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import typeCart from '../../../utils/typeCart.utils.js';
import { imgages } from '../../../utils/imagesData.utils.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';

const ShopingTable = ({ orders }) => {

    const { user } = useLoginContext();
    const [vew, setVew] = useState(null);
    const handleInfo = (id) => setVew(vew === id ? null : id);

    return (
        <div className='shopingTable'>
            <table>
                <thead>
                    <tr>
                        <th>Ver</th>
                        <th>Fecha</th>
                        <th>Orden</th>
                        <th>Pago</th>
                        <th>Total</th>
                        <th>Activo</th>
                        {user.data.role !== 'user' && <th>Usuario</th>}
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.docs && orders.docs.map((ord) => (
                        <Fragment key={ord._id}>
                            <tr>
                                <td
                                    className='onClick'
                                    onClick={() => handleInfo(ord._id)}
                                >
                                    {ord.cart.length} item
                                </td>
                                <td>{new Date(ord.date).toLocaleDateString()}</td>
                                <td>{ord._id}</td>
                                <td>
                                    <p style={{ color: ord.pay.isPay ? 'green' : 'red' }} >{ord.pay.isPay ? 'SI' : 'NO'}</p>
                                    {ord.pay.datePay && <p>{new Date(ord.pay.datePay).toLocaleDateString()}</p>}
                                </td>
                                <td>${ord.total}</td>
                                <td style={{ color: ord.active ? 'green' : 'red' }} >{ord.active ? 'SI' : 'NO'}</td>
                                {user.data.role !== 'user' &&
                                    <td>
                                        <p>{ord.userData.name}</p>
                                        <p>{ord.userData._id}</p>
                                        <p>{ord.userData.email}</p>
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

export default ShopingTable;