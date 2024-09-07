import LastCash from '../../../../../component/cash/LastCash/LastCash';
import OrderPayDas from '../body/orderPay/OrderPayDas/OrderPayDas';
import TransferDas from '../body/transfers/TransferDas/TransferDas';
import './bodyCashDas.scss';
import { useState } from 'react';

const BodyCashDas = ({ country, setLoading }) => {

    const [type, setType] = useState('');

    return (
        <div className='bodyCashDas'>

            <LastCash />

            <div className='bodyCashDasSelect'>
                <label>Acciones</label>
                <select name="" onChange={(e) => setType(e.target.value)}>
                    {country &&
                        <>
                            <option value=""></option>
                            <option value="transfer">Transferencias</option>
                            <option value="orderPay">Orden de pago</option>
                        </>
                    }
                </select>
            </div>
            
            {!country && <p>Elige un país</p>}
            {type === 'transfer' && <TransferDas country={country} setLoading={setLoading} />}
            {type === 'orderPay' && <OrderPayDas country={country} setLoading={setLoading} />}
        </div>
    );
};

export default BodyCashDas;