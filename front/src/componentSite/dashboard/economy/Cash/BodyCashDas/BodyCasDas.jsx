import LastCash from '../../../../../component/cash/LastCash/LastCash';
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
                        </>
                    }
                </select>
            </div>
            
            {!country && <p>Elige un país</p>}
            {type === 'transfer' && <TransferDas country={country} setLoading={setLoading} />}
        </div>
    );
};

export default BodyCashDas;