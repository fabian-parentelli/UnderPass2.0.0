import './walletBodyPanel.scss';
import { useState } from 'react';
import Yield from './Yield/Yield';
import Payments from './Payments/Payments';
import Movement from './Movement/Movement';
import Checkboxes from '../../utils/Checkboxes';
import WalletConf from './WalletConf/WalletConf';

const WalletBodyPanel = ({ wallet, setLoading }) => {

    const [type, setType] = useState(null);

    return (
        <div className='walletBodyPanel'>
            
            <div className='walletBodyPanelChek'>
                <Checkboxes labels={['Configuración', 'Movimientos', 'Pagos', 'Cobros', 'Rendimiento']} setType={setType} />
            </div>

            {type === 'Configuración' && <WalletConf wallet={wallet} setLoading={setLoading} />}
            {type === 'Movimientos' && <Movement wallet={wallet} />}
            {type === 'Pagos' && <Payments wallet={wallet} setLoading={setLoading} />}
            {type === 'Cobros' && <p>Cobros</p>}
            {type === 'Rendimiento' && <Yield wallet={wallet} setLoading={setLoading} />}

        </div>
    );
};

export default WalletBodyPanel;