import './shopping.scss';
import { Fragment, useEffect, useState } from 'react';
import { getOrdersApi } from '../../../helpers/orders/getOrderByUser.api.js';
import Pager from '../../utils/Pager/Pager.jsx';
import BigImg from '../../utils/BigImg/BigImg.jsx';
import { imgages } from '../../../utils/imagesData.utils.js';

const Shopping = ({ userId, setLoading }) => {

    const [orders, setOrders] = useState(null);
    const [page, setPage] = useState(null);
    const [vew, setVew] = useState(null);

    const handleInfo = (id) => setVew(vew === id ? null : id);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = { userid: userId, active: true }
            if (page) query.page = page;
            const response = await getOrdersApi(query);
            if (response.status) setOrders(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, [page]);

    const HandleChangePage = async (page) => setPage(page);

    return (
        <div className='shopping'>
            <table>
                <thead>
                    <tr>
                        <th>Ver</th>
                        <th>Fecha</th>
                        <th>Orden</th>
                        <th>Pago</th>
                        <th>Total</th>
                        <th>Activo</th>
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
                                                        <td>{item.is}</td>
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
            <div className='shoppingPagger'><Pager users={orders} HandleChangePage={HandleChangePage} /></div>
        </div>
    );
};

export default Shopping;