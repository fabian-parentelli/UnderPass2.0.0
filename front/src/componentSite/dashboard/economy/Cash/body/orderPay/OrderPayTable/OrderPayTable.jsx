import './orderPayTable.scss';
import { Fragment, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Copy from '../../../../../../../component/utils/Copy';
import flagsIcon from '../../../../../../../utils/flagsIcon.utils';
import TimePass from '../../../../../../../component/utils/TimePass';
import { useLoginContext } from '../../../../../../../context/LoginContext';

const OrderPayTable = ({ orders, selectedIds, setSelectedIds }) => {

    const [vew, setVew] = useState(null)
    const handleVew = (id) => setVew(vew === id ? null : id);
    const { user } = useLoginContext();

    const handleCheckboxChange = (id) => {
        setSelectedIds(prevSelectedIds =>
            prevSelectedIds.includes(id)
                ? prevSelectedIds.filter(selectedId => selectedId !== id)
                : [...prevSelectedIds, id]
        );
    };

    return (
        <div className='orderPayTable'>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Country</th>
                        <th>°N orden</th>
                        <th>Total</th>
                        <th>Fecha</th>
                        <th>Pago</th>
                        {user.data.role !== 'user' && <th>Check</th>}
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map((ord) => (
                        <Fragment key={ord._id}>
                            <tr>
                                <td onClick={() => handleVew(ord._id)} className='orderPayTablePointer'>
                                    <p>{ord.userData.name}</p>
                                    <p>{ord.userData.email}</p>
                                    <p>{ord.userData?.phone}</p>
                                    <p style={{ fontSize: '10px' }}>{ord.userId}</p>
                                </td>
                                <td>
                                    <img className='orderPayTableFlags'
                                        src={ord.country === 'UY' ? flagsIcon.uy : flagsIcon.ar} alt="img" />
                                </td>
                                <td style={{ fontSize: '12px' }}>{ord.orderId}</td>
                                <td>${ord.total} {ord.country}</td>
                                <td>
                                    <p>{new Date(ord.date).toLocaleDateString()}</p>
                                    <p><TimePass startDate={ord.date} /> horas hábiles</p>
                                </td>
                                <td style={{ color: ord.pay.isPay ? 'green' : 'red' }}>
                                    {ord.pay.isPay ? 'SI' : 'NO'}
                                    {ord.pay.isPay && <p>{new Date(ord.pay.datePay).toLocaleDateString()}</p>}
                                </td>
                                {user.data.role !== 'user' &&
                                    <td>
                                        <Checkbox
                                            checked={Array.isArray(selectedIds) && selectedIds.includes(ord._id)}
                                            onChange={() => handleCheckboxChange(ord._id)}
                                        />
                                    </td>
                                }
                            </tr>
                            {vew === ord._id &&
                                <tr>
                                    <td colSpan='6' className='orderPayTableFinance'>
                                        <p><strong>Titular de Cuenta:</strong> {ord.userData?.finaceData?.holder}</p>
                                        <p><strong>Alias:</strong> {ord.userData?.finaceData?.cbu} <Copy values={ord.userData?.finaceData?.cbu} /></p>
                                        <p><strong>Entidad:</strong> {ord.userData?.finaceData?.bank} </p>
                                        <p><strong>{ord.country === 'UY' ? 'CI' : 'DNI'}:</strong> {ord.userData?.finaceData?.cuit} </p>
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

export default OrderPayTable;