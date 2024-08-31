import './payments.scss';
import TransferPayments from "./TransferPayments";
import { useState } from 'react';

const Payments = ({ wallet, setLoading }) => {

    const [type, setType] = useState('');

    return (
        <div className="payments">

            <div className='paymentsSelect'>
                <label>Tipo de pago</label>
                <select name="" onChange={(e) => setType(e.target.value)}>
                    <option value=""></option>
                    <option value="underpay">UnderPay</option>
                    <option value="mp">Mercado Pago</option>
                    <option value="transfer">Transferencias</option>
                </select>
            </div>

            {type === 'transfer' && <TransferPayments wallet={wallet} setLoading={setLoading} />}
            {type === 'mp' && <p>{type}</p>}
            {type === 'underpay' && <p>{type}</p>}
        </div>
    );
};

export default Payments;
