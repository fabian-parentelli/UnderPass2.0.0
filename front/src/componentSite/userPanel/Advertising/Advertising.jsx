import './advertising.scss';
import { useState } from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Title from '../../../component/dashboard/Title/Title';
import Checkboxes from '../../../component/utils/Checkboxes';
import NewAdvertising from './NewAdvertising/NewAdvertising';
import VewAdvertisiting from './VewAdvertisting/VewAdvertisting';

const Advertising = () => {

    const [vew, setVew] = useState(false);
    const [type, setType] = useState('');

    return (
        <div className='advertising'>
            <Title Icon={LiveTvIcon} name='Publicidad' goTo='/help#advertising' />
            <div className='advertisingBox'>
                <button onClick={() => { setVew(!vew); setType('') }} className='btn btnA'>
                    {vew === false ? 'Crear' : 'Ver'}
                </button>
                {vew === true && <Checkboxes labels={['Banner', 'Publicidad Cards', 'Separador']} setType={setType} />}
            </div>
            {vew === true ? <NewAdvertising type={type} /> : <VewAdvertisiting />}
        </div >
    );
};

export default Advertising;