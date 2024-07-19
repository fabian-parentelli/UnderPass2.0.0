import './videoTut.scss';
import { useState } from 'react';
import Load from '../../../../../component/utils/Load';
import NewVideoTut from '../NewVideoTut/NewVideoTut';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VewVideosTut from '../VewVideosTut/VewVideosTut';
import Title from '../../../../../component/dashboard/Title/Title';

const VideoTut = () => {

    const [isNew, setIsNew] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='videoTut'>
            <Title Icon={SlideshowIcon} name='Video Tutoriales' />

            <button className='btn btnD' onClick={() => setIsNew(!isNew)}>
                {!isNew ? 'Video nuevo' : 'Ver Videos'}
            </button>

            {!isNew
                ? <VewVideosTut setLoading={setLoading} />
                : <NewVideoTut setLoading={setLoading} setIsNew={setIsNew} />
            }
            <Load loading={loading} />
        </div>
    );
};

export default VideoTut;