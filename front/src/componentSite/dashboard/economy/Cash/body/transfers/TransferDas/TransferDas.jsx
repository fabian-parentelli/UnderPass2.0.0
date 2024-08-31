import './transferDas.scss';
import { useState } from 'react';
import Checkboxes from '../../../../../../../component/utils/Checkboxes';
import TransferRecived from '../TransferRecived/TransferRecived';

const TransferDas = ({ country, setLoading }) => {

    const [type, setType] = useState(null);

    return (
        <div className='transferDas'>
            <div className='transferDasChek'>
                <p>Transferencias:</p>
                <div>
                    <Checkboxes labels={['Recibidas', 'Enviadas']} setType={setType} />
                </div>
            </div>

            {type === 'Recibidas' && <TransferRecived country={country} setLoading={setLoading} />}
            {type === 'Enviadas' && <p>Transferencias enviadas</p>}

        </div>
    );
};

export default TransferDas;