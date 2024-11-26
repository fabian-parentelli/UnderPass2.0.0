import './sitePageDisc.scss';
import SpotifyComp from '../../../../../component/utils/SpotifyComp';

const SitePageDisc = ({ disc }) => {
        
    return (
        <div className='sitePageDisc'>
            <h3>{disc.title}</h3>

            <div className='sitePageDiscCont'>

                <img src={disc.img.url} alt={disc.title} className='sitePageDiscImg'
                    style={{ objectPosition: disc.img?.position }}
                />

                <div className='sitePageDiscSongs'>
                    {disc.songs && disc.songs.map((song, ind) => (
                        <SpotifyComp url={song} key={ind}  />
                    ))}
                </div>
            </div>
            
            {disc.text && <p className='sitePageDiscText'>{disc.text}</p>}
        </div>
    );
};

export default SitePageDisc;