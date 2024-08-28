import './typePay.scss';
import { useState } from 'react';
import Checkboxes from '../../../../../component/utils/Checkboxes';

const TypePay = ({ setType }) => {

    return (
        <div className='typePay'>
            <Checkboxes labels={['UnderPay', 'Mercado Pago', 'Transferencia']} setType={setType} />
        </div>
    );
};

export default TypePay;