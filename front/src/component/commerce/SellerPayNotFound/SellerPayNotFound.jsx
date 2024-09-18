import './sellerPayNotFound.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkboxes from '../../utils/Checkboxes';
import { updTypeOrderApi } from '../../../helpers/orders/updTypeOrder.api.js';

const SellerPayNotFound = ({ order, isUnderPay }) => {

    const [type, setType] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (type) {
                const response = await updTypeOrderApi(order._id, type);
                if (response.status === 'success') {
                    if (response.result.pay.typePay === 'Transferencia') navigate(`/transfer/${response.result._id}`);
                    if (response.result.pay.typePay === 'Mercado Pago') window.open(response.result.mercadopago, '_blank');
                } else console.error(response.error);
            };
        }; fetchData();
    }, [type])

    return (
        <div className='sellerPayNotFound'>
            <h2>No tienes saldo suficiente</h2>
            <p>Te recomendamos pagar con transferencia o con Tarjetas</p>
            <div className='line lineMargin'></div>
            <p><span>Tu saldo:</span> ${isUnderPay}</p>
            <p style={{ color: 'red' }}><span>A Pagar:</span> ${order.total}</p>
            <div className='line lineMargin'></div>

            <div className='sellerPayNotFoundChek'>
                <Checkboxes labels={['Transferencia', 'Mercado Pago']} setType={setType} />
            </div>
        </div>
    );
};

export default SellerPayNotFound;