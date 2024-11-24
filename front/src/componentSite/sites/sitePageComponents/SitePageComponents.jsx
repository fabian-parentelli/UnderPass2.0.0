import BackImg from '../../../component/utils/BackImage/BackImg.jsx';
import Messages from '../../../component/messages/Messages/Messages.jsx';
import SitePageCast from '../sitePageComponents/SitePageCast/SitePageCast.jsx';
import SitePageVideo from '../sitePageComponents/SitePageVideo/SitePageVideo.jsx';
import UnderSiteLog from '../../../component/fonts/UnderSiteLog/UnderSiteLog.jsx';
import SiteEventPage from '../sitePageComponents/SitePageEvent/SiteEventPage.jsx';
import SitePageGalery from '../sitePageComponents/SitePageGalery/SitePageGalery.jsx';
import SitePagePortal from '../sitePageComponents/SitePagePortal/SitePagePortal.jsx';
import SitePageProducts from '../sitePageComponents/SitePageProducts/SitePageProducts.jsx';
import SitePageDescription from '../sitePageComponents/SitePageDescription/SitePageDescription.jsx';
import SitePageSocialMedia from '../sitePageComponents/SitePageSocialMedia/SitePageSocialMedia.jsx';
import SitePageDiscography from '../sitePageComponents/SitePageDiscography/SitePageDiscography.jsx';

const SitePageComponents = ({ site }) => {

    return (
        <>
            {site &&
                <>
                    <SitePagePortal site={site} />
                    {site.isEvent && <SiteEventPage site={site} />}
                    <SitePageDescription site={site} />
                    <SitePageSocialMedia site={site} />
                    <SitePageCast site={site} />
                    {site.isDiscography && <SitePageDiscography site={site} />}
                    {site.isProduct && <SitePageProducts site={site} />}
                    <BackImg url={site.imgPortal.banner.url} height={50} />
                    {site.isGalery && <SitePageGalery site={site} />}
                    {site.isVideo && <SitePageVideo site={site} />}
                    <div className='sitePageMessages' ><Messages type='site' typeId={site._id} /></div>
                    <div className='sitePageLogo'><UnderSiteLog size={3} /></div>
                </>
            }
        </>
    );
};

export default SitePageComponents;