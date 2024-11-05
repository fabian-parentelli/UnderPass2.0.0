import './videoSities.scss';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const VideoSities = ({ values, setValues, handleValues }) => {

    const [vews, setVews] = useState([{}, {}, {}]);

    const addVideos = () => setVews([...vews, {}]);
    const handleVideo = (e) => setValues({ ...values, isVideo: e.target.checked });

    return (
        <div className='videoSities'>
            <h6>Videos</h6>

            <section className='videoSitiesSectSwitch'>
                <div className='videoSitiesSwitch'>
                    <p>NO</p>
                    <Switch value={values.isEvent} onChange={handleVideo} />
                    <p>SI</p>
                </div>
                <p className='videoSitiesHelp'>Habilita una galería de videos</p>
            </section>

            {values.isVideo &&
                <section className='videoSitiesCenter'>
                    {vews.map((vid, ind) => (
                        <div key={ind}>
                            <input
                                type="text"
                                name={`video_${ind}`}
                                placeholder='Url del video de youtube'
                                onChange={handleValues}
                            />
                        </div>
                    ))}
                    <p className='btn btnUS btnVideoSities' onClick={addVideos}>Agragar</p>
                </section>
            }
        </div>
    );
};

export default VideoSities;