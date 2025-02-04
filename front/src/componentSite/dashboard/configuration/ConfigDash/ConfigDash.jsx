import './configDash.scss';
import { useState } from 'react';
import WalletsConfDas from './WalletsConsDas/WalletsConfDas';

const ConfigDash = () => {

    const [vew, setVew] = useState('');

    const handleVew = (e) => setVew(e.target.value);
    
    return (
        <div className='configDash'>

            <select onChange={handleVew}>
                <option value="">Elegir</option>
                <option value="wallets">Billeteras</option>
            </select>

            {vew === 'wallets' && <WalletsConfDas />}
        </div>
    );
};

export default ConfigDash;