import './configuration.scss';
import { useState } from 'react';
import CreateCash from '../CreateCash/CreateCash';
import Title from '../../../../component/dashboard/Title/Title';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';

const Configuration = () => {

    const [vew, setVew] = useState(null);

    // const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='configuration'>
            <Title Icon={SettingsInputCompositeIcon} name='Configuración' />
            <div className='configurationBtn'>
                <CreateCash />

            </div>
        </div>
    );
};

export default Configuration;