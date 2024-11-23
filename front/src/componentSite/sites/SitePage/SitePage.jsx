import './sitePage.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Load from '../../../component/utils/Load';
import BackImg from '../../../component/utils/BackImage/BackImg.jsx';
import SitePageCast from '../sitePageComponents/SitePageCast/SitePageCast.jsx';
import { getSiteByLinksApi } from '../../../helpers/sites/getSiteByLink.api.js';
import SiteEventPage from '../sitePageComponents/SitePageEvent/SiteEventPage.jsx';
import SitePagePortal from '../sitePageComponents/SitePagePortal/SitePagePortal.jsx';
import SitePageProducts from '../sitePageComponents/SitePageProducts/SitePageProducts.jsx';
import SitePageDescription from '../sitePageComponents/SitePageDescription/SitePageDescription.jsx';
import SitePageSocialMedia from '../sitePageComponents/SitePageSocialMedia/SitePageSocialMedia.jsx';
import SitePageDiscography from '../sitePageComponents/SitePageDiscography/SitePageDiscography.jsx';
import SitePageGalery from '../sitePageComponents/SitePageGalery/SitePageGalery.jsx';
import SitePageVideo from '../sitePageComponents/SitePageVideo/SitePageVideo.jsx';
import UnderSiteLog from '../../../component/fonts/UnderSiteLog/UnderSiteLog.jsx';
import Messages from '../../../component/messages/Messages/Messages.jsx';

const SitePage = () => {

    const { link } = useParams();
    const [site, setSite] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByLinksApi(link);
            if (response.status === 'success') setSite(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='sitePage'>
            {site &&
                <>
                    <SitePagePortal site={site} />
                    {site.isEvent && <SiteEventPage site={site} />}
                    <SitePageDescription site={site} />
                    <SitePageSocialMedia site={site} />
                    <SitePageCast site={site} />
                    {site.isDiscography && <SitePageDiscography site={site} />}
                    {/* {site.isProduct && <SitePageProducts site={site} />} */}
                    {/* <BackImg url={site.images.find(i => i.name === 'banner')?.url} height={50} /> */}
                    {/* {site.isGalery && <SitePageGalery site={site} />} */}
                    {/* {site.isVideo && <SitePageVideo site={site} />} */}
                    {/* <div className='sitePageMessages' ><Messages type='site' typeId={site._id} /></div> */}
                    {/* <div className='sitePageLogo'><UnderSiteLog size={3} /></div> */}
                </>
            }
            <Load loading={loading} />
        </div>
    );
};

export default SitePage;