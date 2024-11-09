import './sitePagePortal.scss';
import MessageIcon from '@mui/icons-material/Message';
import Favorite from '../../../../component/utils/Favorite/Favorite.jsx';
import { typeSitesCategory, typeSitesSubCategory } from '../../../../utils/sitiesCategories.js';

const SitePagePortal = ({ site }) => {

    return (
        <div className='sitePagePortal'>

            <section className='sitePagePortalA'>
                <img
                    src={site.images.find(i => i.name === 'banner')?.url}
                    alt="img" className='sitePagePortalBanner'
                    style={{ objectPosition: site.images.find(i => i.name === 'banner')?.position }}
                />
                <div className='sitePagePortalDiv'>
                    <h2>{site.title}</h2>
                    <p className='pgray'>{typeSitesCategory(site.category)} - {typeSitesSubCategory(site.subCategory)}</p>
                    <p>{site.location.city} - {site.location.province}</p>
                </div>
                <img
                    src={site.images.find(i => i.name === 'logo')?.url}
                    alt="img" className='sitePagePortalLogo'
                    style={{ objectPosition: site.images.find(i => i.name === 'logo')?.position }}
                />
            </section>

            <section className='sitePagePortalB'>

                <div className='sitePagePortalButtons'>
                    <Favorite id={site._id} />
                    <p>Favoritos</p>
                </div>

                <div className='sitePagePortalButtons' style={{cursor: 'pointer'}}>
                    <MessageIcon style={{ color: 'gray' }} />
                    <p>Mensaje</p>
                </div>

            </section>
        </div>
    );
};

export default SitePagePortal;