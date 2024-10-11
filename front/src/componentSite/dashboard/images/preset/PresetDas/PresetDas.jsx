import './presetDas.scss';
import { useState, useEffect } from 'react';
import Load from '../../../../../component/utils/Load';
import CreatePresets from '../CreatePresets/CreatePresets';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import Title from '../../../../../component/dashboard/Title/Title';
import VewPresets from '../VewPresets/VewPresets';

const PresetDas = () => {

    const [vew, setVew] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => { window.scrollTo(0, 0) }, [vew]);

    return (
        <div className='presetDas'>
            <Title Icon={PhotoLibraryIcon} name='Presets' />
            <button onClick={() => setVew(!vew)} className='btn btnC'>{vew ? 'Crear' : 'Ver'}</button>

            {vew
                ? <VewPresets setLoading={setLoading} />
                : <CreatePresets setLoading={setLoading} setVew={setVew} />
            }
            <Load loading={loading} />
        </div>
    );
};

export default PresetDas;