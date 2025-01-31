import './configuration.scss';
import { useState } from 'react';
import CreateCash from '../CreateCash/CreateCash';
import Title from '../../../../component/dashboard/Title/Title';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import CleanDataBase from '../CleanDataBase/CleanDataBae';
import Load from '../../../../component/utils/Load';

const Configuration = () => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='configuration'>
            <Title Icon={SettingsInputCompositeIcon} name='Configuración' />

            <section className='configurationBtns'>
                <button className='btn btnD' onClick={() => handleVew('eco')}>Economía</button>
                <button className='btn btnD' onClick={() => handleVew('dba')}>Base Datos</button>
            </section>

            <section>
                {vew === 'eco' && <CreateCash />}
                {vew === 'dba' && <CleanDataBase setLoading={setLoading} />}
            </section>

            <Load loading={loading} />
        </div>
    );
};

export default Configuration;