import './sitePageDiscography.scss';
import SpotifyComp from '../../../../component/utils/SpotifyComp';

const SitePageDiscography = ({ site }) => {

    return (
        <div className='sitePageDiscography'>
            
            <h2>Discografía:</h2>

            <section>
                {site.discography && site.discography.map((dis, ind) => (
                    <div key={ind} className='sitePageDiscographyDiv'>

                        <p className='sitePageDiscographyTitle colUS'>{dis.discTitle}</p>
                        
                        <div className='sitePageDiscographyCont'>
                            <img
                                src={site.images.find(i => i.name === `disc${ind + 1}`)?.url}
                                alt="img" className='sitePageDiscographyImg'
                                style={{ objectPosition: site.images.find(i => i.name === `disc${ind + 1}`)?.position }}
                            />
                            <div className='sitePageDiscographySong'>
                                {dis.discUrls && dis.discUrls.length > 0 && dis.discUrls.map((song, ind) => (
                                    <SpotifyComp key={ind} url={song} />
                                ))}   
                            </div>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    );
};

export default SitePageDiscography;