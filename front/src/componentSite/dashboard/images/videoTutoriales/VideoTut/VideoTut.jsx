import './videoTut.scss';
import { useState } from 'react';
import Load from '../../../../../component/utils/Load';
import NewVideoTut from '../NewVideoTut/NewVideoTut';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VewVideosTut from '../VewVideosTut/VewVideosTut';

const VideoTut = () => {

    const [isNew, setIsNew] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='videoTut'>
            <div className='videoTutTitle'>
                <SlideshowIcon />
                <h2>Videos Tutolriales</h2>
            </div>
            <div className='line'></div>

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