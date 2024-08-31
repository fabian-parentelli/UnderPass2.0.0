import './walletBodyPanel.scss';
import { useState } from 'react';
import Checkboxes from '../../utils/Checkboxes';
import Payments from './Payments/Payments';

const WalletBodyPanel = ({ wallet, setLoading }) => {

    const [type, setType] = useState(null);

    return (
        <div className='walletBodyPanel'>
            <div className='walletBodyPanelChek'>
                <Checkboxes labels={['Configuración', 'Movimientos', 'Pagos', 'Cobros']} setType={setType} />
            </div>

            {type === 'Configuración' && <p>Configuración</p>}
            {type === 'Movimientos' && <p>Movimientos</p>}
            {type === 'Pagos' && <Payments wallet={wallet} setLoading={setLoading} />}
            {type === 'Cobros' && <p>Cobros</p>}

        </div>
    );
};

export default WalletBodyPanel;