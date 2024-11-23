import './siteCard.scss';
import { Link } from 'react-router-dom';
import Favorite from '../../../component/utils/Favorite/Favorite';
import { typeSitesCategory, typeSitesSubCategory } from '../../../utils/sitiesCategories';

const SiteCard = ({ site }) => {

    return (
        <div className='siteCard'>

            <Favorite id={site._id} />

            <Link to={`/site/${site.link}`} className='siteCardLink'>
                <img src={site.imgPortal.logo.url}
                    alt="img" className='siteCardImg'
                />
                <h3>{site.title}</h3>
                <p className='siteCardCat'>{typeSitesCategory(site.category)} - {typeSitesSubCategory(site.subCategory)}</p>
                <p className='siteCardLoc'>{site.location.city} - {site.location.province}</p>
                <div className='siteCardDiv'>
                    {site.isEvent && <p className='siteCardLoc pgray'>{site.events.length} evento{site.events.length === 1 ? '' : 's'}</p>}
                    {site.isProduct && <p className='siteCardLoc pgray'>{site.products.length} producto{site.products.length === 1 ? '' : 's'}</p>}
                </div>
            </Link>

        </div>
    );
};

export default SiteCard; 