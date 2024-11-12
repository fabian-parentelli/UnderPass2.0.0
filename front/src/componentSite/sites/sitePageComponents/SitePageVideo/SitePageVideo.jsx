import './sitePageVideo.scss';
import { useState, useEffect } from 'react';
import VideosVew from '../../../../component/utils/VideosVew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SitePageVideo = ({ site }) => {

    const [vew, setVew] = useState(site?.videos[0]);
    const [startIndex, setStartIndex] = useState(0);
    const [videosVisible, setVideosVisible] = useState(3);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = (video) => {
        setVew(video);
        setIsPlaying(true);
    };
    const handleNext = () => setStartIndex((prevIndex) => (prevIndex + 1) % site?.videos.length);
    const handlePrev = () => setStartIndex((prevIndex) => (prevIndex - 1 + site?.videos.length) % site?.videos.length);

    useEffect(() => {
        const updateVideosVisible = () => {
            if (window.innerWidth < 600) setVideosVisible(1);
            else if (window.innerWidth < 900) setVideosVisible(2);
            else setVideosVisible(3);
        };
        updateVideosVisible();
        window.addEventListener("resize", updateVideosVisible);
        return () => window.removeEventListener("resize", updateVideosVisible);
    }, []);

    return (
        <div className='sitePageVideo'>
            <h2>Videos</h2>

            <section className='sitePageVideoVew'>
                <div className='sitePageVideoVewFather'>
                    {vew && <VideosVew url={vew} isPlaying={isPlaying} />}
                </div>
            </section>

            <section className='sitePageVideoAllVideos'>
                <ArrowBackIosIcon onClick={handlePrev} className='sitePageVideoArrow' />
                <div className='carousel-container'>
                    <div
                        className='carousel-track'
                        style={{ transform: `translateX(-${startIndex * (100 / videosVisible)}%)` }}
                    >
                        {site?.videos.map((vid, ind) => (
                            <div className='sitePageVideoVewFather' key={ind}>
                                <VideosVew url={vid} />
                                <div className='sitePageVideoBox' onClick={() => handleClick(vid)}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <ArrowForwardIosIcon onClick={handleNext} className='sitePageVideoArrow' />
            </section>
        </div>
    );
};

export default SitePageVideo;