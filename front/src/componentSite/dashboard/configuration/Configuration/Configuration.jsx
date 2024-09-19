import './configuration.scss';
import { useState } from 'react';
import CreateCash from '../CreateCash/CreateCash';
import CreateToken from '../CreateToken/CreateToken';
import Title from '../../../../component/dashboard/Title/Title';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';

const Configuration = () => {

    const [vew, setVew] = useState(null)
    const handleVew = (id) => setVew(vew === id ? null : id);

    return (
        <div className='configuration'>
            <Title Icon={SettingsInputCompositeIcon} name='Configuración' />
            <div className='configurationBtn'>
                <CreateCash />
                <button className='btn btnD' onClick={() => handleVew('token')}>Token</button>
            </div>

            {vew === 'token' && <CreateToken />}
        </div>
    );
};

export default Configuration;