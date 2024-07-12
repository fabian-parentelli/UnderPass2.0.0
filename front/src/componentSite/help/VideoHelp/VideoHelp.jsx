import './videoHelp.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load.jsx';
import VideosVew from '../../../component/utils/VideosVew.jsx';
import { getVideoTutByNameApi } from '../../../helpers/images/getVideoTutByName.api.js';

const VideoHelp = () => {

    const { tutorial } = useParams();
    const [loading, setloading] = useState(false);
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            const response = await getVideoTutByNameApi(tutorial);
            if (response.status === 'success') {
                setVideoData(response.result);
                setloading(false);
            };
        }; fetchData();
    }, [tutorial]);

    return (
        <div className='videoHelp'>
            <h2>Video Tutoriales</h2>
            {videoData &&
                <>
                    <p>{videoData.title}</p>
                    <div className='videoDiv'>
                        <VideosVew url={videoData.url} />
                    </div>
                    <Link className='btnBack' to={`/help#${videoData.name}`}>Volver</Link>
                </>
            }
            <Load loading={loading} />
        </div>
    );
};

export default VideoHelp;