import './payments.scss';
import { useState } from 'react';
import UnderPayments from './UnderPayments';
import TransferPayments from "./TransferPayments";

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

            {type === 'transfer' && <TransferPayments wallet={wallet.userId} setLoading={setLoading} />}
            {type === 'mp' && <p>{type}</p>}
            {type === 'underpay' && <UnderPayments wallet={wallet} setLoading={setLoading} />}
        </div>
    );
};

export default Payments;