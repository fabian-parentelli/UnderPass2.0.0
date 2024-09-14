import './bodyCashDas.scss';
import LastCash from '../../../../../component/cash/LastCash/LastCash';
import MovementsCash from '../body/movmentsCash/MovementsCash/MovementsCash';
import OrderPayDas from '../body/orderPay/OrderPayDas/OrderPayDas';
import TransferDas from '../body/transfers/TransferDas/TransferDas';
import { useState } from 'react';

const BodyCashDas = ({ country, setLoading }) => {

    const [type, setType] = useState('');

    return (
        <div className='bodyCashDas'>

            <div className='bodyCashDasBody'>
                <LastCash />

                <div className='bodyCashDasSelect'>
                    <label>Acciones</label>
                    <select name="" onChange={(e) => setType(e.target.value)}>
                        {country &&
                            <>
                                <option value=""></option>
                                <option value="transfer">Transferencias</option>
                                <option value="orderPay">Orden de pago</option>
                                <option value="movmentCash">Movimientos</option>
                            </>
                        }
                    </select>
                </div>
            </div>

            <div className='line' style={{marginTop: '1rem'}}></div>

            {!country && <p>Elige un país</p>}
            {type === 'transfer' && <TransferDas country={country} setLoading={setLoading} />}
            {type === 'orderPay' && <OrderPayDas country={country} setLoading={setLoading} />}
            {type === 'movmentCash' && <MovementsCash country={country} setLoading={setLoading} />}
        </div>
    );
};

export default BodyCashDas;