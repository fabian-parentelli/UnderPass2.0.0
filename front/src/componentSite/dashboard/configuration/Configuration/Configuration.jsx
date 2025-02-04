import './configuration.scss';
import { useState } from 'react';
import ConfigDash from '../ConfigDash/ConfigDash';
import Load from '../../../../component/utils/Load';
import CleanDataBase from '../CleanDataBase/CleanDataBae';
import Title from '../../../../component/dashboard/Title/Title';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';

const Configuration = () => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='configuration'>
            <Title Icon={SettingsInputCompositeIcon} name='Configuración' />

            <section className='configurationBtns'>
                <button className='btn btnD' onClick={() => handleVew('con')}>Configuración</button>
                <button className='btn btnD' onClick={() => handleVew('dba')}>Base Datos</button>
            </section>

            <section>
                {vew === 'con' && <ConfigDash />}
                {vew === 'dba' && <CleanDataBase setLoading={setLoading} />}
            </section>

            <Load loading={loading} />
        </div>
    );
};

export default Configuration;