import './streamVideo.scss';
import { useState } from 'react';

const StreamVideo = ({ values, handleValues }) => {

    const [vews, setVews] = useState([{}]);
    const addVideos = () => setVews([...vews, {}]);

    return (
        <div className='streamVideo'>
            <h6>Videos</h6>

            <section className='streamVideoSect'>
                {vews.map((vid, ind) => (
                    <div key={ind}>
                        <input
                            type="text"
                            name={`streamVideo_${ind}`}
                            placeholder='Url del video de youtube'
                            onChange={handleValues}
                        />
                        <div>
                            <textarea
                                name={`streamText_${ind}`}
                                placeholder='Descripción del video'
                                onChange={handleValues}
                            ></textarea>
                        </div>
                    </div>
                ))}
                <p className='btn btnUS btnVideoStream' onClick={addVideos}>Agragar video</p>
            </section>

        </div>
    );
};

export default StreamVideo;