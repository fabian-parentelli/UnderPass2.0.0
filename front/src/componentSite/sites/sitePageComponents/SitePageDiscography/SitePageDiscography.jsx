import './sitePageDiscography.scss';
import SitePageDisc from './SitePageDisc/SitePageDisc';
import { useState } from 'react';

const SitePageDiscography = ({ site }) => {

    const [vew, setVew] = useState(0);

    return (
        <div className='sitePageDiscography'>
            <h2>Discografía</h2>

            <section>
                <div className='sitePageDiscographySelect'>
                    {site.discography && site.discography.map((disc, ind) => (
                        <div key={ind} className='sitePageDiscographyDivDisc' onMouseOver={() => setVew(ind)}>
                            <p>{disc.title}</p>
                            <img src={disc.img.url} alt={disc.title} className='sitePageDiscographyimg'
                                style={{ objectPosition: disc.img?.position }}
                            />
                        </div>
                    ))}
                </div>

                {<SitePageDisc disc={site.discography[vew]} />}
            </section>
        </div>
    );
};

export default SitePageDiscography;