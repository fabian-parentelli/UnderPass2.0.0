import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalCustom from '../../utils/ModalCustom/ModalCustom';
import SellerPayNotFound from '../SellerPayNotFound/SellerPayNotFound';

const SellerPay = ({ ord, openModal, isUnderPay }) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (ord.pay.typePay === 'UnderPay') {
            if (isUnderPay > ord.total) navigate(`/underpay/cart/${ord._id}`);
            else setOpen(true);
        };
        if (ord.pay.typePay === 'Transferencia') navigate(`/transfer/${ord._id}`);
        if (ord.pay.typePay === 'Mercado Pago') window.open(response.result.mercadopago, '_blank');
    };

    return (
        <>
            <td
                className='shopingTableActive'
                onClick={ord.pay.isPay ? () => openModal(ord._id) : () => handleClick()}
            >
                <p style={{ color: ord.pay.isPay ? 'green' : 'red' }} >{ord.pay.isPay ? 'SI' : 'NO'}</p>
                {ord.pay.datePay && <p>{new Date(ord.pay.datePay).toLocaleDateString()}</p>}
                <p>{ord.pay?.typePay}</p>
            </td>
            <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                <SellerPayNotFound order={ord} isUnderPay={isUnderPay} />
            </ModalCustom>
        </>
    );
};

export default SellerPay;