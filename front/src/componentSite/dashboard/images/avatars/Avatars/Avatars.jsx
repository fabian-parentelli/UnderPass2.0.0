import './avatars.scss';
import { useState } from 'react';
import NewAvatar from '../NewAvatar/NewAvatar';
import Load from '../../../../../component/utils/Load';
import Title from '../../../../../component/dashboard/Title/Title';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VewAvatarAd from '../VewAvatarsAd/VewAvatarAd';

const Avatars = () => {

    const [vew, setVew] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='avatars'>
            <Title Icon={SupervisedUserCircleIcon} name='Avatares' />
            <button className='btn btnB' onClick={() => setVew(!vew)}>{vew ? 'Ver' : 'Crear'}</button>
            {vew
                ? <NewAvatar setLoading={setLoading} setVew={setVew} />
                : <VewAvatarAd />
            }
            <Load loading={loading} />
        </div>
    );
};

export default Avatars;