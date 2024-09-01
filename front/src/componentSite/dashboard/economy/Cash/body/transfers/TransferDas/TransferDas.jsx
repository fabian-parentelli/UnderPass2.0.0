import './transferDas.scss';
import { useState } from 'react';
import Checkboxes from '../../../../../../../component/utils/Checkboxes';
import TransferRecived from '../TransferRecived/TransferRecived';
import TransferFilter from '../TransferFilter/TransferFilter';

const TransferDas = ({ country, setLoading }) => {

    const [type, setType] = useState(null);
    const [values, setValues] = useState({ type: '', confirm: '' });
    
    return (
        <div className='transferDas'>
            <div className='transferDasChek'>
                <p>Transferencias:</p>
                <div>
                    <Checkboxes labels={['Recibidas', 'Enviadas']} setType={setType} />
                </div>
                {type === 'Recibidas' && <TransferFilter setValues={setValues} />}
            </div>

            {type === 'Recibidas' && <TransferRecived country={country} setLoading={setLoading} values={values} />}
            {type === 'Enviadas' && <p>Transferencias enviadas</p>}

        </div>
    );
};

export default TransferDas;