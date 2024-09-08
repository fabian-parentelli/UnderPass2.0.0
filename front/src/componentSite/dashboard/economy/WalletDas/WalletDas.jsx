import './walletDas.scss';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Title from '../../../../component/dashboard/Title/Title';
import { useState } from 'react';
import WalletCreate from '../../../../component/wallet/WalletCreate/WalletCreate';
import Load from '../../../../component/utils/Load';
import WalletVewByUser from './WalletVewByUser/WalletVewByUser';
import GetAllWallets from './GelAllWallets/GetAllWallets';

const WalletDas = () => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='walletDas'>
            
            <Title Icon={LocalAtmIcon} name='Billeteras' />

            <div className='walletDasBtn'>
                <button className='btn btnC' onClick={() => handleVew(1)}>Ver todas</button>
                <button className='btn btnC' onClick={() => handleVew(2)}>Ver Usuario</button>
                <button className='btn btnC' onClick={() => handleVew(3)}>Crear</button>
            </div>

            {vew === 1 && <GetAllWallets setLoading={setLoading} />}
            {vew === 2 && <WalletVewByUser setLoading={setLoading} />}
            {vew === 3 && <WalletCreate setLoading={setLoading} setVew={setVew} />}

            <Load loading={loading} />
        </div>
    );
};

export default WalletDas;