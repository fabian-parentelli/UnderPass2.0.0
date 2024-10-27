import './vewStream.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import { getEventByIdApi } from '../../../helpers/event/getEventById.api.js';
import VideosVew from '../../../component/utils/VideosVew';
import VideoTwich from '../../../component/utils/VideoTwich.jsx';

const VewStream = () => {

    const [loading, setLoading] = useState(false);
    const [event, setEvent] = useState(null);
    const { id, channel } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getEventByIdApi(id);
            if (response.status === 'success') setEvent(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='vewStream'>
            {event &&
                <>
                    <h2>{event.title}</h2>
                    <p>{new Date(event.startDate).toLocaleDateString('es-ES', { timeZone: 'UTC' })} - {event.startHour}.</p>
                    {channel === 'youtube' &&
                        <div className='vewStreamFather'>
                            <div className='vewStreamVideo'>
                                <VideosVew url={event.links.filter(link => link.channel === channel)[0].link} />
                            </div>
                        </div>
                    }
                    {channel === 'twitch' &&
                        <div className='vewStreamFather'>
                            <div className='vewStreamVideo'>
                                <VideoTwich url={event.links.filter(link => link.channel === channel)[0].link} />
                            </div>
                        </div>
                    }
                </>
            }
            <Load loading={loading} />
        </div>
    );
};

export default VewStream;